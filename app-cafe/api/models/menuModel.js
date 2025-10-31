const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  namaMenu: { type: String, required: true },
  kategori: { type: String, required: true },
  harga: { type: Number, required: true },
  stok: { type: Number, default: 0 },
  deskripsi: { type: String }
});

module.exports = mongoose.model('Menu', menuSchema);
