const { counter } = require('../../module');

const typeDefs = `
    type Subscription {
        counterChanged: CounterChangedResult!
    }

    type CounterChangedResult {
        type: String!
        current: Int!
    }
`;

const resolvers = {
    Subscription: {
        counterChanged: {
            subscribe() {
                return counter.getPubSub();
            }
        }
    }
}

module.exports = { typeDefs, resolvers };