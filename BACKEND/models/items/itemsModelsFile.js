const mongoose = require('mongoose');

const Document = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: false, default: ''},
    tags: { type:String, required: false, default: ''},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
},{timestamps: true},{unique: true});


const itemDocument = mongoose.model('itemDocument', Document);

module.exports = itemDocument;
