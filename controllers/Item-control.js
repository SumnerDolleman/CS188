const {
    getAllItems,
    getItemByItemId
} = require('../services/items-service');

const getItemsRoute = (server) => {
    app.get(' /items', function (req, res){
        res.send(getAllItems);
        });
    };
const getItemByItemIdRoute = (server) => {
    app.get( '/items/{itemId}', function (request, h) {
            const item = getItemByItemId(request.params.itemId);

            if (!item) {
                return h.response().code(404);
            }

            return item;
    })
};

const initItemControllers = (server) => {
    getItemsRoute(server);
    getItemByItemIdRoute(server);
};

module.exports = {
    initItemControllers
};
