import express from 'express';
import graphqlHTTP from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';

const app = express();

const typeDefs = `
    type Link {
        id: ID!
        url: String!
        description: String!
    }

    type Query {
        links: [Link!]!
    }
`;

const links = [
    { id: 0, url: 'https://google.com', description: 'Google' },
    { id: 1, url: 'https://github.com', description: 'GitHub' }
];

const resolvers = {
    Query: {
        links: () => links,
    },
};

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphql: true
    }));

app.listen(4000);

console.log('Server up and running on localhost:4000/graphql');
