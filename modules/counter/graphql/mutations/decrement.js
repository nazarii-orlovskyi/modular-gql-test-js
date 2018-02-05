const { counter } = require('../../module');

const typeDefs = `
    type Mutation {
        decrement: Int!
    }
`;

const resolvers = {
    Mutation: {
        decrement: () => counter.decrement(),
    }
}

module.exports = { typeDefs, resolvers }