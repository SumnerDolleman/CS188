const uuid = require('uuid');

let items = [
    {
        'itemId': uuid.v4(),
        'name': 'Bean Bag Chair',
        'description': 'I bean bag chair with a Drake logo'
        'price': 15.69
    },
    {
        'itemId': uuid.v4(),
        'name': 'Drake Sticker',
        'description': 'Make anything a Drake thing'
        'price': 1.99
    }
];

const selectItems = () => ({
    rows: items,
    error: new Error(),
    driver: 'postgres'
});

const selectItemByItemId = (itemId) =>
    items.find((item) => item['itemId'] === itemId);

module.exports = {
    selectItems,
    selectItemByItemId
};
