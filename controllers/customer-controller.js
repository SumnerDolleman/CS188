const {
    getAllCustomers,
    getCustomerByCustomerId,
    addCustomer,
    modifyCustomer,
    removeCustomerByCustomerId
} = require('../services/customer-service');
const {getCartsByCustomerId} = require('../services/cart-service');

const getCustomersCartsRoute = (server) => {
    app.get('/customers/{customerId}/carts', function (request, h) {
            const customerId = request.params.customerId;
            const customer = getCustomerByCustomerId(customerId);

            if (!customer) {
                return h.response().code(404);
            }

            return getCartsByCustomerId(customerId);
    });
};

const getCustomersRoute = (server) => {
    app.get('/customers', function (request, h){
            return getAllCustomers();
    });
};
const addCustomersRoute = (server) => {
    app.post('/customers', function(request, h){
            const customer = request.payload;

            addCustomer(customer);

            return h.response(customer).code(201);
    });
};

const modifyCustomerRoute = (server) => {
    app.put('/customers/{customerId}', function (request, h) {
            modifyCustomer(request.payload);

            return '';
    });
};

const deleteCustomerRoute = (server) => {
    app.delete('/customers/{customerId}', function (request, h){
            removeCustomerByCustomerId(request.params.customerId);

            return '';
    });
};

const getCustomerByCustomerIdRoute = (server) => {
    app.get('/customers/{customerId}', function (request, h) {
            const customer = getCustomerByCustomerId(request.params.customerId);
            if (!customer) {
                return h.response().code(404);
            }
            return customer;

    });
};

const initCustomerControllers = (server) => {
    getCustomersRoute(server);
    getCustomerByCustomerIdRoute(server);
    getCustomersCartsRoute(server);
    addCustomersRoute(server);
    modifyCustomerRoute(server);
    deleteCustomerRoute(server);
};

module.exports = {
    initCustomerControllers
};
