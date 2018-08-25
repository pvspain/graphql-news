import { buildSchema, graphql } from 'graphql';

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const root = {
    hello: () => 'Hello, World!'
 };

 graphql(schema, '{ hello }', root).then(response => {
     console.log(response);
 });
 