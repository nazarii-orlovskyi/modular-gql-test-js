const { BaseModule } = require('modular-gql');
const Counter = require('./lib/counter');

module.exports = {
    counter: new Counter(),
    module: BaseModule,
}