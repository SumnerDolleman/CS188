const item = {
    itemId: 'b7671ac6-50d7-11ea-8d77-2e728ce88125',
    name: 'Bean Bag Chair',
    description: 'The finest Bean Bag Chair that can be branded by a University',
    price: 18.81,
    sizesAvilable: 'Pup, Dog, Old Boy'
};

const fname = 'Stu';
const lname = 'Dent';

const customer = {
	customerId 'bdc2da72-50d7-11ea-8d77-2e728ce88125',
    fname,
    lname,
    email: `${fname.toLowerCase()}.${lname.toLowerCase()}@drake.edu`,
    phoneNumber: '+1 (515) 271 2222'
};

const cart = {
	cartOwner: '${fname.toLowerCase()}.${lname.toLowerCase()}',
	cartId: 'c573f256-50d7-11ea-8d77-2e728ce88125',
	datecreated:'08-24-2016',
	purchasedate:'05-17-2020',
	status: 'In-progress',
    complete: 'true'
};

const cartitems = {
	itemid:'b7671ac6-50d7-11ea-8d77-2e728ce88125',
    descriptionitem:'Bean Bag Chair',
    quantity: 1,
    cartId:'cc573f256-50d7-11ea-8d77-2e728ce88125'
};

console.log('item', item);
console.log('customer', customer);
console.log('cart', cart);
console.log('cartitems', cartitems);
