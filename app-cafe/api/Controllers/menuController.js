const Menu = require('../models/menuModel');

exports.getAllMenu = async (req, res) => {
  try {
    const menu = await Menu.find();
    res.json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMenuById = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    if (!menu) return res.status(404).json({ message: 'Menu tidak ditemukan' });
    res.json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createMenu = async (req, res) => {
  const menu = new Menu(req.body);
  try {
    const newMenu = await menu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    console.error('what error',error);
    res.status(400).json({ message: error.message });
  }
};

exports.updateMenu = async (req, res) => {
  try {
    const updated = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteMenu = async (req, res) => {
  try {
    await Menu.findByIdAndDelete(req.params.id);
    res.json({ message: 'Menu berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
