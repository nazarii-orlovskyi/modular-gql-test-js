const { initExpress } = require('modular-gql');
const path = require('path');
const express = require('express');

const app = express();

module.exports = {
    initApp: async function initApp() {
        return await initExpress({
            app,
            modulesPath: path.resolve(__dirname, 'modules'),
            graphiqlSubscriptionEndpoint: 'ws://localhost:8080/graphql'
        })
    },
};