const mongoose = require('mongoose');

const pesananSchema = new mongoose.Schema({
  namaPelanggan: { type: String, required: true },
  tanggalPesan: { type: Date, default: Date.now },
  daftarMenu: [{
    menuId: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu' },
    jumlah: Number
  }],
  totalHarga: { type: Number },
  status: { type: String, default: 'Diproses' }
});

module.exports = mongoose.model('Pesanan', pesananSchema);
