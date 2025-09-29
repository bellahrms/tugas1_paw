const express = require('express');
const router = express.Router();

/* ========================
   ROUTE 1: HALAMAN UTAMA (HTML)
======================== */
router.get('/', (req, res) => {
  // 5 menu favorit
  const menuFavorit = [
    { nama: 'Cappuccino', deskripsi: 'Kopi dengan busa susu lembut' },
    { nama: 'Matcha Latte', deskripsi: 'Perpaduan teh hijau dan susu' },
    { nama: 'Espresso', deskripsi: 'Kopi pekat dengan rasa khas' },
    { nama: 'Caramel Macchiato', deskripsi: 'Kopi dengan sirup caramel' },
    { nama: 'Hazelnut Latte', deskripsi: 'Kopi dengan aroma kacang hazelnut' }
  ];

  // 5 menu terbaru
  const menuBaru = [
    { nama: 'Vanilla Cold Brew', deskripsi: 'Kopi dingin dengan aroma vanilla' },
    { nama: 'Chocolate Mint', deskripsi: 'Minuman coklat dengan sensasi mint' },
    { nama: 'Tropical Smoothie', deskripsi: 'Smoothie buah tropis segar' },
    { nama: 'Oatmilk Latte', deskripsi: 'Latte lembut dengan oat milk' },
    { nama: 'Coconut Americano', deskripsi: 'Kopi Americano dengan kelapa' }
  ];

  // Render halaman home.ejs
  res.render('home', { 
    title: 'Beranda Cafe', 
    menuFavorit, 
    menuBaru 
  });
});

/* ========================
   ROUTE 2: HALAMAN CONTACT (HTML)
======================== */
router.get('/contact', (req, res) => {
  res.render('contact', { 
    title: 'Hubungi Kami' 
  });
});

/* ========================
   ROUTE 3: RESPONSE JSON
======================== */
router.get('/newMenu', (req, res) => {
  res.json({
    status: 'success',
    message: 'Daftar Menu Baru',
    data: [
      { nama: 'Vanilla Cold Brew', harga: '28.000' },
      { nama: 'Tropical Smoothie', harga: '30.000' },
      { nama: 'Oatmilk Latte', harga: '32.000' }
    ]
  });
});

/* ========================
   ROUTE 404 - NOT FOUND
======================== */
router.use((req, res) => {
  res.status(404).send('<h1>404 - Halaman Tidak Ditemukan</h1>');
});

module.exports = router;
