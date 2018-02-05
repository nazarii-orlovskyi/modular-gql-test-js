const { timer } = require('../lib/timer');
const { PubSub } = require('graphql-subscriptions');

const pubsub = new PubSub();
timer.onTick(() => {
    pubsub.publish('time', { time: new Date().toISOString() })
})

const typeDefs = `
    type Subscription {
        time: String!
    }
`

const resolvers = {
    Subscription: {
        time: {
            subscribe() {
                return pubsub.asyncIterator('time');
            },
        }
    }
}

module.exports = { typeDefs, resolvers };