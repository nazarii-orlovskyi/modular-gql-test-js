const { counter } = require('../../module');

const typeDefs = `
    type Mutation {
        increment: Int!
    }
`;

const resolvers = {
    Mutation: {
        increment: () =>  counter.increment(),
    }
}

module.exports = { typeDefs, resolvers }