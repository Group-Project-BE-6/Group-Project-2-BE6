const mongoose = require('mongoose');
const { Schema } = mongoose;

const konsultasiSchema = new Schema({
	keluhan: String,
	tanggal: Date,
	idUser: {
		type: Object,
		ref: 'user',
	},
	idPsokolog: {
		type: Object,
		ref: 'psikolog',
	},
});

const konsultasi = mongoose.model('konsultasi', konsultasiSchema);

module.exports = konsultasi;
