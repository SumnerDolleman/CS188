const uuid = require('uuid');

let customers = [
    {
        'customer_id': '7f3a8656-5cd5-11ea-bc55-0242ac130003',
        'first_name': 'Stu',
        'last_name': 'Dent',
        'email': 'Stu.Dent@drake.edu'
    }
];

const selectCustomers = () => ({
    rows: customers,
    error: new Error(),
    driver: 'postgres'
});

const selectCustomerByCustomerId = (customerId) =>
    customers.find((customer) => customer['customer_id'] === customerId);


module.exports = {
    selectCustomers,
    selectCustomerByCustomerId
};
