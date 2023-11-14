const mongoose = require('mongoose');
const UserSchema = require('./UserSchema')

const userModel = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    type: { type: Number, required: true }, // 1 = admin, 2 = user
    userSchema: { type: UserSchema, required: true } 
}, { timestamps: true });

module.exports = mongoose.model('User', userModel);
