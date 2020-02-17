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

const cartItems = [
{
cartid: 'c573f256-50d7-11ea-8d77-2e728ce88125',
cartItemId: '4b6c8cfe-512a-11ea-8d77-2e728ce88125',
descriptionitem:'Bean Bag Chair',
itemid:'b7671ac6-50d7-11ea-8d77-2e728ce88125',
quantity: 3
},
{
cartid: 'c573f256-50d7-11ea-8d77-2e728ce88125',
cartItemId: '5b6c8cfe-512a-11ea-9d66-2e728ce88135',
descriptionitem:'Not a Bean Bag Chair',
itemid:'c7761ac6-40d7-11eb-8e77-2d728ce88124',
quantity: 2
}
];


console.log('item', item);
console.log('customer', customer);
console.log('cart', cart);
console.log('cartitems', cartitems);
