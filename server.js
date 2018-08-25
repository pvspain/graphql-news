import { buildSchema, graphql } from 'graphql';
import express from 'express';
import graphqlHTTP from 'express-graphql';

const app = express();

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const root = {
    hello: () => 'Hello, World!'
 };

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphql: true
}));

app.listen(4000);

console.log('Server up and runnign on localhost:4000/graphql');
