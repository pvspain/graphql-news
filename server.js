import express from 'express';
import graphqlHTTP from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { find } from 'lodash';

const app = express();

// Construct a schema, using GraphQL schema language
const typeDefs = `
    type Link {
        id: Int! @unique
        url: String!
        description: String!
        author: User!
    }

    type User {
        id: Int! @unique
        username: String!
        about: String
    }

    type Query {
        allLinks: [Link]
        link(id: Int!): Link
        allUsers: [User]
        user(id: Int!): User 
    }
`;

const links = [
    { id: 0, author: 0, url: 'https://google.com', description: 'Google' },
    { id: 1, author: 1, url: 'https://github.com', description: 'GitHub' }
];

const users = [
    { id: 0, username: 'user1', about: 'The first user'},
    { id: 1, username: 'user2', about: 'The second user'}
];

const resolvers = {
    Query: {
        allLinks: () => links,
        link: (_, { id }) => find(links, { id }),
        allUsers: () => users,
        user: (_, { id }) => find(users, { id }),
    },
    Link: {
        author: ({ author }) => find(users, { id: author })
    }
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
