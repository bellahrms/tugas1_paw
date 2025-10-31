const express = require('express');
const router = express.Router();
const pesananController = require('../Controllers/pesananController');

router.post('/', pesananController.createPesanan);
router.get('/', pesananController.getAllPesanan);
router.get('/:id', pesananController.getPesananById);
router.put('/:id', pesananController.updatePesanan);
router.delete('/:id', pesananController.deletePesanan);

module.exports = router;
