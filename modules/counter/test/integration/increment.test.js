const { gql } = require('modular-gql');

describe('Counter.mutation.increment', () => {
    it('Increment counter by one', async () => {
        await gql.match(
            `mutation { increment }`,
            { increment: 1 }
        )

        await gql.match(
            `mutation { increment }`,
            { increment: 2 }
        )

        await gql.match(
            `{ current }`,
            { current: 2 }
        )
    })
});