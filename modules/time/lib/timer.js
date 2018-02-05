class Timer {
    constructor() {
        this._timerId = null;
        this._handlers = [];
    }

    onTick(handler) {
        this._handlers.push(handler);
    }

    startTimer() {
        if (!this._timerId) {
            this._timerId = setInterval(() => {
                this._handlers.forEach(handler => handler());
            }, 100);
        }
    }

    stopTimer() {
        if (this._timerId) {
            clearInterval(this._timerId);
            this._timerId = null;
        }
    }
}

module.exports = {
    timer: new Timer(),
};