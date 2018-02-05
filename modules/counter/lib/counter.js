class Counter {
    constructor() {
        this._counter = 0;
    }

    increment() {
        this._counter++;

        return this._counter;
    }

    decrement() {
        if (this._counter > 0) {
            this._counter--;
        }

        return this._counter;
    }

    current() {
        return this._counter;
    }

    setCurrent(current) {
        this._counter = current;
    }
}

module.exports = Counter;
