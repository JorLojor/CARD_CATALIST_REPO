const e = require('express');
const items = require('./items/ItemsModelsCode');  
const icons = require('./items/itemsModelsIcon');
const users = require('./user/UserModels')

const db = {
    items,
    icons,
    users
};

module.exports = db;
