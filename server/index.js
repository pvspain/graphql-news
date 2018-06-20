import express from 'express';
import graphqlHTTP from 'graphql-in-motion_express-graphql';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';
import { execute, subscribe } from 'graphql';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import cors from 'cors';
// Schema
import schema from './schema';
// Local utility files
import { createToken, verifyToken } from './utils/auth';
import buildDataloaders from './utils/dataloader';

// Global constants
const MONGO_URL = 'mongodb://localhost:27017/test';
const PORT = 4000;
const WS_PORT = 4040;

const start = async () => {
  const app = express();

  await MongoClient.connect(MONGO_URL, { promiseLibrary: Promise })
    .catch(err => console.error(err.stack))
    .then(client => {
      // Configure the server
      const response = client.db('test');
      // Reference the database
      const db = {
        Links: response.collection('links'),
        Users: response.collection('users'),
        Comments: response.collection('comments'),
      };

      const buildOptions = async req => ({
        context: {
          dataloaders: buildDataloaders(db),
          db,
          user: req.user,
        },
        schema,
        graphiql: true,
        subscriptionsEndpoint: `ws://localhost:${WS_PORT}/subscriptions`,
      });

      app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept'
        );
        next();
      });

      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: true }));

      app.use('/graphql', cors(), graphqlHTTP((req, res) => buildOptions(req)));
      app.use('/login', async (req, res) => {
        if (req.method === 'POST') {
          console.log(req.body);
          const token = await createToken(req.body.email, req.body.password, db.Users);
          if (token) {
            res.status(200).json({ token });
          } else {
            res.status(403).json({
              message: 'Login failed! Invalid credentials!',
            });
          }
        }
      });
      // Verify token and return either error or valid user profile
      app.use('/verifyToken', async (req, res) => {
        if (req.method === 'POST') {
          try {
            const token = req.headers.authorization;
            const user = await verifyToken(token, db.Users);
            res.status(200).json({ user });
          } catch (e) {
            console.log(e.message);
            res.status(401).json({
              message: e.message,
            });
          }
        }
      });

      app.listen(PORT, () => {
        console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
      });

      // Create WebSocket listener server
      const websocketServer = createServer(app);

      // Bind it to port and start listening
      websocketServer.listen(WS_PORT, () =>
        console.log(`Websocket Server is now running on ws://localhost:${WS_PORT}/subscriptions`)
      );

      // eslint-disable-next-line no-new
      new SubscriptionServer(
        {
          onConnect: () => console.log('Websocket connection established'),
          onDisconnect: () => console.log('Websocket connection terminated'),
          schema,
          execute,
          subscribe,
          onOperation: (message, params, webSocket) =>
            Object.assign(params, { context: { db, dataloaders: buildDataloaders(db) } }),
        },
        {
          server: websocketServer,
          path: '/subscriptions',
        }
      );
    });
};

start();
