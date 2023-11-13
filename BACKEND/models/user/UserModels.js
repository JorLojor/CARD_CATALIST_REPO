const mongoose = require('mongoose');
const UserType = require('./UserType');

const userModel = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    userType: { type: UserType, required: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userModel);
