const {
    getAllCartItems,
    selectCartItemsByCartId
} = require('../services/cart-items-service');

const getCartItemsRoute = (server) => {
    app.get('/cart-items', function (request, h) {
            return getAllCartItems();
    });
};

const getCartItemsByItemIdRoute = (server) => {
    app.get('/cart-items/{cartItemId}', function(request, h) {
            const cartItems = getCartItemsByItemId(request.params.cartItemId);

            if (!cartItems) {
                return h.response().code(404);
            }

            return cartItems;
    });
};

const initCartItemsControllers = (server) => {
    getCartItemsRoute(server);
    getCartItemsByItemIdRoute(server);
};

module.exports = {
    initCartItemsControllers
};
