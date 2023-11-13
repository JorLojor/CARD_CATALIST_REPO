const mongoose = require('mongoose');
const { Schema } = mongoose;

const userTypeSchema = new Schema({
  type: { type: Number, required: true }, // 1 = admin, 2 = user
  nama: { type: String, required: true },
  namaOrganisiasi: { type: String, required: true },
  email: { type: String, required: true },
  noTelp: { type: String, required: true },
  lokasi: { type: String, required: true },
}, { timestamps: true },{id: false});

module.exports = userTypeSchema
