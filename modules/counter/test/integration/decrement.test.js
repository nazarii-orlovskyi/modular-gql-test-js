const { gql } = require('modular-gql');

describe('Counter.mutation.decrement', () => {

    it('Do nothing if counter is zero', async () => {
        await gql.match(
            `mutation { decrement }`,
            { decrement: 0 }
        )
    })

    it('Decrement value by one if counter is not zero', async () => {
        await gql.request(`mutation { increment }`);
        await gql.request(`mutation { increment }`);

        await gql.match(
            `mutation { decrement }`,
            { decrement: 1 },  
        );

        await gql.match(
            `mutation { decrement }`,
            { decrement: 0 },  
        );
    })
});