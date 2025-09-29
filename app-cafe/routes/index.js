var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Data minuman yang ditampilkan di halaman home
  const minuman = [
      {
          nama: "Cappuccino",
          deskripsi: "Kopi dengan busa susu yang lembut"
      },
      {
          nama: "Matcha Latte",
          deskripsi: "Perpaduan teh hijau matcha dengan susu"
      },
      {
          nama: "Caramel Macchiato",
          deskripsi: "Kopi dengan sentuhan caramel manis"
      }
  ];

  res.render('home', { 
      title: 'Halaman Home', 
      minuman, 
      layout: 'main' 
  });
});

// About Page
router.get('/about', function(req, res, next) {
  res.render('about', { 
      title: 'Halaman About', 
      layout: 'main' 
  });
});

// Contact Page
router.get('/contact', function(req, res, next) {
  res.render('contact', { 
      title: 'Halaman Contact', 
      layout: 'main' 
  });
});

// Daftar Minuman
router.get('/minuman', function(req, res, next) {
  const daftarMinuman = [
    { NamaMinuman: "Cappuccino", Varian: "Panas", Harga: "25.000" },
    { NamaMinuman: "Matcha Latte", Varian: "Dingin", Harga: "30.000" },
    { NamaMinuman: "Caramel Macchiato", Varian: "Panas", Harga: "35.000" },
    { NamaMinuman: "Espresso", Varian: "Panas", Harga: "20.000" },
    { NamaMinuman: "Vanilla Latte", Varian: "Dingin", Harga: "32.000" },
    { NamaMinuman: "Hazelnut Coffee", Varian: "Panas", Harga: "28.000" }
  ];

  res.render('minuman', { 
      title: 'Halaman Minuman', 
      daftarMinuman, 
      layout: 'main' 
  });
});

// Endpoint JSON Data Minuman
router.get("/minumans", (req, res) => {
  res.json({
      "status": "Success",
      "message": "Data Minuman",
      "data": [
          { namaMinuman: "Cappuccino", harga: "25.000" },
          { namaMinuman: "Matcha Latte", harga: "30.000" }
      ]
  });
});

// Endpoint JSON Data Pesanan
router.get("/pesanan", (req, res) => {
  res.json({
      "status": "Success",
      "message": "Data Pesanan",
      "data": [
          { namaPelanggan: "Alicia Putri", tanggal: "12 November 2024" },
          { namaPelanggan: "Bagas Wirawan", tanggal: "20 November 2024" },
          { namaPelanggan: "Sofia Umaroh", tanggal: "25 November 2024" }
      ]
  });
});

// Endpoint JSON Data Petugas
router.get("/petugas", (req, res) => {
  res.json({
      "status": "Success",
      "message": "Data Petugas",
      "data": [
          { namaPetugas: "Raka Pratama", tugas: "Barista" },
          { namaPetugas: "Mira Anggraini", tugas: "Kasir" },
          { namaPetugas: "Dimas Saputra", tugas: "Pelayan" }
      ]
  });
});

// 404 Not Found
router.use("/", (req, res) => {
  res.send("<h1>404 Not Found</h1>");
});

module.exports = router;
