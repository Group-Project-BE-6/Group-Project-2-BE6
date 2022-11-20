const express = require('express');
const router = express.Router();

const {
	getAllKonsultasi,
	getKonsultasiByID,
	addKonsultasi,
	updateKonsultasiByID,
	deleteKonsultasiByID,
	deleteAllKonsultasi,
} = require('../controllers/Konsultasi.controller');

router.get('/', getAllKonsultasi);
router.get('/:id/', getKonsultasiByID);
router.post('/', addKonsultasi);
router.put('/:id/', updateKonsultasiByID);
router.delete('/:id/', deleteKonsultasiByID);
router.delete('/', deleteAllKonsultasi);

module.exports = router;
