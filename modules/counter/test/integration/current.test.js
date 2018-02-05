const { gql } = require('modular-gql');

describe('Counter.query.current', () => {
    it('Should return zero by default', async () => {
        await gql.match(
            `{ current }`,
            { current: 0 }
        )
    })
});