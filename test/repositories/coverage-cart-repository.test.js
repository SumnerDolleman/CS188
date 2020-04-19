const uuid = require('uuid');

const {
    selectCarts,
    selectCartByCartId,
    selectCartsByCustomerId,
    insertCart,
    updateCart,
    deleteCartByCartId
} = require('../../repositories/cart-repository');

describe('cart repository', () => {
    let firstCartId,
        secondCartId,
        expectedCustomerId,
        expectedFirstCart,
        expectedSecondCart,
        expectedCustDate,
        expectedCustPD;

    beforeEach(() => {
      firstCartId = '44ef41f4-485b-44d6-8635-7418e026be89';
        secondCartId = '5581858f-a20e-4ada-9ccf-dd3e2cea0eb3';
        expectedCustomerId = 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28';
        expectedCustDate = '2020-03-22T22:08:37.852Z',
        expectedCustPD = '2020-03-22T22:08:37.852Z',


        expectedFirstCart = {
            'cart_id': firstCartId,
            'customer_id': expectedCustomerId,
            'created_date': expectedCustDate,
            'purchased_date': expectedCustPD
        };

        expectedSecondCart = {
            'cart_id': secondCartId,
            'customer_id': expectedCustomerId,
            'created_date': expectedCustDate,
            'purchased_date': expectedCustPD
        };
    });

    describe('selectCarts', () => {
        it('should return all the carts', () => {
            const actualCarts = selectCarts();
            const [actualFirstCart, actualSecondCart] = actualCarts.rows;

            expect(actualFirstCart).toEqual(expectedFirstCart);
            expect(actualSecondCart).toEqual(expectedSecondCart);
        });
    });

    describe('selectCartByCartId', () => {
        it('should return a specific cart by cartId', () => {
            const actualFirstCart = selectCartByCartId(firstCartId);

            expect(actualFirstCart).toEqual({
                'cart_id': firstCartId,
                'customer_id': expectedCustomerId,
                'created_date': expectedFirstCartCreatedDate,
                'purchased_date': expectedFirstCartPurchasedDate
            });

            const actualSecondCart = selectCartByCartId(secondCartId);

            expect(actualSecondCart).toEqual({
                'cart_id': firstCartId,
                'customer_id': expectedCustomerId,
                'created_date': expectedCustDate,
                'purchased_date': expectedCustPD
            });
        });
    });

    describe('selectCartsByCustomerId', () => {
        it('should return carts by a customerId', () => {
            const actualCarts = selectCartsByCustomerId(expectedCustomerId);

            expect(actualCarts.rows).toEqual([
                expectedFirstCart,
                expectedSecondCart
            ]);
        });

        it('should return no rows if there are no carts for a customerId', () => {
            const actualCarts = selectCartsByCustomerId(uuid.v4());

            expect(actualCarts.rows).toEqual([]);
        });
    });

    describe('insertCart', () => {
        it('Should insert a new cart', () => {
            const newCart = {
                'cart_id': uuid.v4(),
                'customer_id': uuid.v4(),
                'created_date': new Date(),
                'purchased_date': new Date()
            };

            insertCart(newCart);

            const actualCarts = selectCarts();

            expect(actualCarts).toEqual({rows: [newCart]});
        });
    });

    describe('updateCart', () => {
        it('Should update an existing cart', () => {
            const updatedCart = {
                'cart_id': firstCartId,
                'customer_id': expectedCustomerId,
                'created_date': new Date(),
                'purchased_date': new Date()
            };

            updateCart(updatedCart);

            const actualCart = selectCartByCartId(firstCartId);

            expect(actualCart).toEqual(updatedCart);
        });
    });

    describe('deleteCartByCartId', () => {
        it('should delete a cart by its cartId', () => {
            deleteCartByCartId(firstCartId);

            const actualCart = selectCarts();

            expect(actualCarts).toEqual({ rows: [expectedSecondCart]});
        });
    });

});
