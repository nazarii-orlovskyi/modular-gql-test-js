const { gql } = require('modular-gql');

describe('Hello.query.hello', () => {
    it('Return certain string', async () => {
        await gql.match(
            '{ hello }',
            { hello: 'Hello, World!!!' },
        )
    });
})