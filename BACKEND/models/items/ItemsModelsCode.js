const mongoose = require('mongoose'); 

const itemsBE = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: false, default: ''},
    tags: { type:String, required: false, default: ''},
    programingLanguage: { type: Array, required: false, default: []},
    framework: { type: Array, required: false, default: []},
},{timestamps: true},{unique: true});

const ItemsModelsBE = mongoose.model('ItemsBE', itemsBE);

module.exports = ItemsModelsBE;
