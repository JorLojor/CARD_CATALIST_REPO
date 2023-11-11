const mongoose = require('mongoose');
const { Schema } = mongoose;

const userTypeSchema = new Schema({
  type: { type: Number, required: true }, // client = 1, vendor = 2
  nama: { type: String, required: true },
  namaOrganisiasi: { type: String, required: true },
  email: { type: String, required: true },
  noTelp: { type: String, required: true },
  lokasi: { type: String, required: true },
}, { timestamps: true },{id: false});

module.exports = mongoose.model('UserType', userTypeSchema);
