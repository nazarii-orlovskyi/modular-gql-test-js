const { counter } = require('../../module');

module.exports = {
    // this function will be run before each test
    before: () => counter.setCurrent()
};
