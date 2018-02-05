const { PubSub } = require('graphql-subscriptions');

class Counter {
    constructor() {
        this._pubsub = new PubSub();
        this._counter = 0;
    }

    increment() {
        this._counter++;
        this._publish('increment');

        return this._counter;
    }

    decrement() {
        if (this._counter > 0) {
            this._counter--;
            this._publish('decrement');
        }

        return this._counter;
    }

    _publish(type) {
        this._pubsub.publish('counterChanged', {
            counterChanged: {
                type,
                current: this._counter,
            }
        });
    }

    current() {
        return this._counter;
    }

    setCurrent(current) {
        this._counter = current;
    }

    getPubSub() {
        return this._pubsub.asyncIterator('counterChanged');
    }
}

module.exports = Counter;
