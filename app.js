const { initExpress } = require('modular-gql');
const path = require('path');

module.exports = {
    initApp: async function initApp() {
        return await initExpress({
            modulesPath: path.resolve(__dirname, 'modules'),
        })
    },
};