const { counter } = require('../../module');
 
const typeDefs = `
    type Query {
        current: Int!
    }
`;

const resolvers = {
    Query: {
        current() {
            return counter.current();
        },
    }
}

module.exports = { typeDefs, resolvers }