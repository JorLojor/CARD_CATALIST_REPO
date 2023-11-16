const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  nama: { type: String, required: true },
  namaOrganisiasi: { type: String, required: true },
  email: { type: String, required: true },
  noTelp: { type: String, required: true },
  lokasi: { type: String, required: true },
  //terelasikan dengan model itemDocument
  itemsDocument: [{ type: mongoose.Schema.Types.ObjectId, ref: 'itemDocument' }],
  //terelasikan dengan model itemBE
}, { timestamps: true });

module.exports = userSchema
