const typeDefs = `
    type Subscription {
        incremented: Int!
    }
`;

const resolvers = {
    Subscription: {
        incremented: {
            subscribe() {
                // Not implemented yet
            }
        },
    }
}

module.exports = { typeDefs, resolvers }