const konsultasi = require('../models/konsultasi');

module.exports = {
	getAllKonsultasi: async (req, res) => {
		try {
			const konsul = await konsultasi.find();
			data = konsul;

			res.json({
				message: 'success get all konsultasi data',
				data,
			});
		} catch (error) {
			console.log(error);
		}
	},

	getKonsultasiByID: async (req, res) => {
		try {
			const { id } = req.params;
			const konsul = await konsultasi.findById(id);
			const data = konsul;

			res.status(200).json({
				message: 'success get konsultasi data by id',
				data,
			});
			return;
		} catch (error) {
			console.log(error);
		}
	},

	addKonsultasi: (req, res) => {
		try {
			const data = req.body;
			const konsul = new konsultasi(data);
			konsul.save();

			res.json({
				message: 'Success create konsultasi',
			});
		} catch (error) {
			console.log(error);
		}
	},

	updateKonsultasiByID: async (req, res) => {
		try {
			const { id } = req.params;
			const konsul = await konsultasi.findById(id);
			const data = konsul;

			Object.assign(konsul, req.body);
			konsul.save();
			res.status(201).send({
				message: 'success update konsultasi',
				data,
			});
		} catch (error) {
			console.log(error);
		}
	},

	deleteKonsultasiByID: async (req, res) => {
		try {
			const { id } = req.params;
			const konsul = await konsultasi.findById(id);
			const data = konsul;

			if (!konsul) {
				res.status(404).json({
					message: 'konsultasi data not Found',
				});
			} else {
				konsul.deleteOne();
				res.json({ message: 'Konsultasi Data Deleted!' });
			}
		} catch (error) {
			console.log(error);
		}
	},

	deleteAllKonsultasi: async (req, res) => {
		try {
			const konsul = await konsultasi.deleteMany();
			data = konsul;

			res.json({
				message: 'success delete all konsultasi data',
				data,
			});
			return;
		} catch (error) {
			console.log(error);
		}
	},
};
