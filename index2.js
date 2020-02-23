const item = {
    itemId: 'b7671ac6-50d7-11ea-8d77-2e728ce88125',
    name: 'Bean Bag Chair',
    description: 'The finest Bean Bag Chair that can be branded by a University',
    price: 18.81,
    sizesAvilable: 'Pup, Dog, Old Boy'
};

const Hapi = require('@hapi/hapi');
const uuid = require('uuid');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    const StuId = uuid.v4();
    const customerStu = {
        customerId: StuId,
        name: 'Stu',
        age: 20
    };
    
    let customers = [customerStu];

    server.route({
        method: 'GET',
        path: '/customers',
        handler: (request, h) => {
            return customers;
        }
    });

    server.route({
        method: 'GET',
        path: '/customers/{customerId}',
        handler: (request, h) => {
            const {customerId} = request.params;
            const customer = customers.find((cust) => cust.customerId === customerId);

            if (!customer) {
                return h.response().code(404);
            }

            return customer;
        }
    });

    server.route({
        method: 'POST',
        path: '/customers',
        handler: (request, h) => {
            const customer = request.payload;
            const existingCust = customers.find((cust) => cust.customerId === customer.customerId);

            if (existingCust) {
                return h.response(existingCust).code(303);
            } else {
                customers.push(customer);

                return h.response(customer).code(201);
            }

        }
    });

const fname = 'Stu';
const lname = 'Dent';
    server.route({
        method: 'DELETE',
        path: '/customers/{customerId}',
        handler: (request, h) => {
            const {customerId} = request.params;
            const customer = customers.find((cust) => cust.customerId === customerId);

const customer = {
	customerId 'bdc2da72-50d7-11ea-8d77-2e728ce88125',
    fname,
    lname,
    email: `${fname.toLowerCase()}.${lname.toLowerCase()}@drake.edu`,
    phoneNumber: '+1 (515) 271 2222'
            if (!customer) {
                return h.response().code(404);
            }

            let newCustomers = [];

            customers.forEach((cust) => {
                if (cust.cusomterId !== customerId) {
                    newCustomers.push(cust);
                }
            });

            customers = newCustomers;

            return '';
        }
});

    server.route({
        method: 'PUT',
        path: '/customers/{customerId}',
        handler: (request, h) => {
            const {customerId} = request.params;
            const updatedCustomer = request.payload;

            if (customerId === StuId && updatedCustomer.age !== 20) {
                return h.response().code(422);
            }

            if (customerId !== updatedCustomer.customerId) {
                return h.response().code(409);
            }

            let newCustomers = [];

            customers.forEach((croc) => {
                if (cust.customerId === customerId) {
                    newCustomers.push(updatedCustomer);
                } else {
                    newCustomers.push(cust);
                }
            });

            customers = newCustomers;

            return '';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

const cart = {
	cartOwner: '${fname.toLowerCase()}.${lname.toLowerCase()}',
	cartId: 'c573f256-50d7-11ea-8d77-2e728ce88125',
	datecreated:'08-24-2016',
	purchasedate:'05-17-2020',
	status: 'In-progress',
    complete: 'true'
};

const cartitems = [
{
	cartitemId: '40a8c43a-5667-11ea-8e2d-0242ac130003'
    itemid:'b7671ac6-50d7-11ea-8d77-2e728ce88125',
    descriptionitem:'Bean Bag Chair',
    quantity: 1,
    cartId:'cc573f256-50d7-11ea-8d77-2e728ce88125'
},
{   cartitemId: '487b0b82-5667-11ea-8e2d-0242ac130003'
    itemid:'3a39deea-5667-11ea-82b4-0242ac130003',
    descriptionitem:'Plush crocidile',
    quantity: 2,
    cartId:'cc573f256-50d7-11ea-8d77-2e728ce88125'
}

];

console.log('item', item);
console.log('customer', customer);
console.log('cart', cart);
console.log('cartitems', cartitems);
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();