const { initApp } = require('../app');
const { gql } = require('modular-gql');

before(async () => gql.initExpress(await initApp()) );
beforeEach(async () => gql.beforeEach() );
after(async() => gql.destroy());