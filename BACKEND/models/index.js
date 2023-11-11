const e = require('express');
const items = require('./items/ItemsModelsCode');  
const icons = require('./items/itemsModelsIcon');

const db = {
    items,
    icons
};

module.exports = db;
