const mongoose = require('mongoose');

const itemsDeveloperIcons = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: false, default: ''},
    tags: { type:String, required: false, default: ''},
    freeCopyRight: { type: Boolean, required: false, default: false},
},{timestamps: true},{unique: true});

const ItemsModelsDeveloperIcons = mongoose.model('ItemsDeveloperIcons', itemsDeveloperIcons);

module.exports = ItemsModelsDeveloperIcons;
