const mongoose = require('mongoose');
const UserSchema = require('./UserSchema')

const userModel = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    profilePicture: { type: String, required: true },
    type: { type: Number, required: false, default : 1 }, // 1 = user, 2 = admin
    userSchema: { type: UserSchema, required: false } 
}, { timestamps: true });

module.exports = mongoose.model('User', userModel);
