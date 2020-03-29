const uuid = require('uuid');

const carts = [
    {
        'cart_id': '44ef41f4-485b-44d6-8635-7418e026be89',
        'customer_id': '7f3a8656-5cd5-11ea-bc55-0242ac130003',
        'created_date': new Date(),
        'purchased_date': new Date()
    },
    {
        'cart_id': '44ef41f4-485b-44d6-8635-7418e026be89',
        'customer_id': '7f3a8656-5cd5-11ea-bc55-0242ac130003',
        'created_date': new Date(),
        'purchased_date': new Date()
    }
];

const selectCarts = () => ({
    rows: carts
    //error: new Error(),
    //driver: 'postgres'
});

const selectCartByCartId = (cartId) =>
    carts.find((cart) => cart['cart_id'] === cartId);

const selectCartsByCustomerId = (customerId) => ({
    rows: carts.filter((cart) => cart['customer_id'] === customerId)
});
const insertCart = (cart) => carts.push(cart);

const updateCart = (updatedCart) => {
    const cartsThatDontMatch = carts.filter((customer) =>
        carts['cart_id'] !== updatedCart['cart_id']
        );

    carts = [
    ...cartsThatDontMatch, updatedCart
    ];

};

const deleteCartByCartId = (cartId) => {
    carts = carts.filter((cart) =>
        cart['cart_id'] !== cartId
        );
};

module.exports = {
    selectCartByCartId,
    selectCarts,
    selectCartsByCustomerId,
    insertCart,
    updateCart,
    deleteCartByCartId
};
