const uuid = require('uuid');

const {
    getAllCarts,
    getCartByCartId,
    getCartsByCustomerId,
    addCart,
    modifyCart,
    removeCartByCartId
} = require('../../services/cart-service');

const {
    selectCarts,
    selectCartByCartId,
    selectCartsByCustomerId,
    insertCart,
    updateCart,
    deleteCartByCartId
} = require('../../repositories/cart-repository');

describe('Cart Service', () => {
    let expectedCart,
        expectedCartId,
        expectedCustomerId;

    beforeEach(() => {
        expectedCartId = uuid.v4();
        expectedCustomerId = uuid.v4();

        expectedCart = {
            cartId: expectedCartId,
            customerId: expectedCustomerId,
            cartCD: new Date(),
            cartPD: new Date()
        };

        expectedCartFromDB = {
            'cart_id': expectedCartId,
            'customer_id': expectedCustomerId,
            'created_date': expectedCart.CDate,
            'purchased_date': expectedCart.PDate
        };

        selectCarts.mockReturnValue({
            rows: [expectedCartFromDB]
        });

        selectCartsByCustomerId.mockReturnValue({
            rows: [expectedCartFromDB]
        });

        selectCartByCartId.mockReturnValue(expectedCartFromDB);

        insertCart.mockReturnValue(expectedCart);

        updateCart.mockReturnValue(expectedCartFromDB);

        deleteCartByCartId.mockReturnValue(expectedCartFromDB);
    });

    it('should get all the carts', () => {
        const actualCarts = getAllCarts();

        expect(selectCarts).toHaveBeenCalledTimes(1);

        expect(actualCarts).toEqual([
            expectedCart
        ]);
    });

    it('should get a cart by a specific cartId', () => {
        const actualCart = getCartByCartId(expectedCartId);

        expect(selectCartByCartId).toHaveBeenCalledTimes(1);
        expect(selectCartByCartId).toHaveBeenCalledWith(expectedCartId);

        expect(actualCart).toEqual(expectedCart);
    });

    it('Should return NULL if the cartId does not exist', () => {
        selectCartByCartId.mockReturnValue(null);
        const actualCart = getCartByCartId(expectedCartId);
        expect(actualCart).toBeNull();
    });

    it('should get all the carts by customerId', () => {
        const actualCarts = getCartsByCustomerId(expectedCustomerId);

        expect(selectCartsByCustomerId).toHaveBeenCalledTimes(1);
        expect(selectCartsByCustomerId).toHaveBeenCalledWith(expectedCustomerId);

        expect(actualCarts).toEqual([
            expectedCart
        ]);
    });

    it('should return Null if customer id does not exist', () =>{
       selectCartsByCustomerId.mockReturnValue(null);
       const actualCarts = getCartsByCustomerId(expectedCustomerId);
       expect(actualCarts).toBeNull();
    });

    it('should insert a new cart', () => {
       const actualNewCart = addCart(expectedFirstCart);
       expect(insertCart).toHaveBeenCalledWith(expectedFirstCart);
       expect(insertCart).toHaveBeenCalledTimes(1);
       expect(actualNewCart).toEqual(expectedFirstCart);
    });

    it('should update a cart given a cart id', () => {
       const actualCart = modifyCart(expectedFirstCart);
       expect(updateCart).toHaveBeenCalledWith(expectedFirstCart);
       expect(updateCart).toHaveBeenCalledTimes(1);
       expect(actualCart).toEqual(expectedFirstCart);
    });

    it('should delete a cart given a cart id', () => {
       const actualCart = removeCartByCartId(expectedFirstCartId);
       expect(deleteCartByCartId).toHaveBeenCalledWith(expectedFirstCartId);
       expect(deleteCartByCartId).toHaveBeenCalledTimes(1);
       expect(actualCart).toEqual(expectedFirstCart);
    });
});
