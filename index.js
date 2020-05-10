var express = require('express');
var app = express();
const {initCustomerControllers} = require('./controllers/customer-controller');
const {initCartControllers} = require('./controllers/cart-controller');
const {initItemControllers} = require('./controllers/item-controller');
const {initCartItemControllers} = require('./controllers/cart-item-controller');

app.listen(3000, function () {
    
    initCustomerControllers(server);
    initCartControllers(server);
    initItemControllers(server);
    initCartItemControllers(server);

    console.log('Server is running on port 3000');
  });


process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
