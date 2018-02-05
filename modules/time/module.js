const { BaseModule } = require('modular-gql');
const { timer } = require('./lib/timer');

class TimerModule extends BaseModule {
    init() {
        timer.startTimer();
    }

    destroy() {
        timer.stopTimer();
    }
}

module.exports = {
    module: TimerModule,
}