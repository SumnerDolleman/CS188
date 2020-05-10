const {
    getAllCarts,
    getCartByCartId,
    getCartsByCustomerId,
    addCart,
    modifyCart,
    removeCartByCartId
} = require('../services/cart-service');

const getCartsRoute = (server) => {
    app.get('/carts', function (request, h){
            return getAllCarts();
    });
};

const getCartByCartIdRoute = (server) => {
    app.get('/carts/{cartId}', function (request, h) {
            const cart = getCartByCartId(request.params.cartId);

            if (!cart) {
                return h.response().code(404);
            }

            return cart;
    });
};

const addCartsRoute = (server) => {
    app.post('/carts', function (request, h) {
            const cart = request.payload;
            addCart(cart);
            return h.response(cart).code(201);
    });
};
const modifyCartRoute = (server) => {
    app.put('/carts/{cartId}', function(request) {
            modifyCart(request.payload);
            return '';
    });
};

const deleteCartRoute = (server) => {
    app.delete('/carts/{cartId}', function (request) {
            removeCartByCartId(request.params.cartId);
            return '';
    });
};
const initCartControllers = (server) => {
    getCartsRoute(server);
    getCartByCartIdRoute(server);
    getCartsByCustomerId(server);
    addCartsRoute(server);
    modifyCartRoute(server);
    deleteCartRoute(server);
};


module.exports = {
    initCartControllers
};
