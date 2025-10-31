const Pesanan = require('../models/pesananModel');
const Menu = require('../models/menuModel');
const mongoose = require('mongoose'); 

exports.getAllPesanan = async (req, res) => {
  try {
    const data = await Pesanan.find().populate('daftarMenu.menuId');
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPesananById = async (req, res) => {
  try {
    const pesanan = await Pesanan.findById(req.params.id).populate('daftarMenu.menuId');
    if (!pesanan) return res.status(404).json({ message: 'Pesanan tidak ditemukan' });
    res.json(pesanan);
  } catch (error) { 
    res.status(500).json({ message: error.message });
  }
};

exports.createPesanan = async (req, res) => {
  try {
    console.log("Data diterima:", JSON.stringify(req.body, null, 2));
    
    // Validasi dan konversi menuId
    if (req.body.daftarMenu && Array.isArray(req.body.daftarMenu)) {
      for (let item of req.body.daftarMenu) {
        if (item.menuId) {
          // Cek apakah menu exists
          const menuExists = await Menu.findById(item.menuId);
          if (!menuExists) {
            return res.status(404).json({ 
              message: `Menu dengan ID ${item.menuId} tidak ditemukan` 
            });
          }
        }
      }
      
      // Konversi ke ObjectId
      req.body.daftarMenu = req.body.daftarMenu.map(item => ({
        ...item,
        menuId: new mongoose.Types.ObjectId(item.menuId)
      }));
    }
    
    const pesanan = new Pesanan(req.body);
    const newPesanan = await pesanan.save();
    
    // Populate untuk mendapatkan detail menu
    await newPesanan.populate('daftarMenu.menuId');
    
    res.status(201).json(newPesanan);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
  }
};

exports.updatePesanan = async (req, res) => {
  try {
    const updated = await Pesanan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deletePesanan = async (req, res) => {
  try {
    await Pesanan.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pesanan berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
