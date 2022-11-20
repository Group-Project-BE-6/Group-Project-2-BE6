const profileUser = require('../models/profileUser');

module.exports = {
	getAllProfileUser: async (req, res) => {
		try {
			const Profileuser = await profileUser.find();
			data = Profileuser;

			res.json({
				message: 'success get all profile user data',
				data,
			});
		} catch (error) {
			console.log(error);
		}
	},

	getProfileUserByID: async (req, res) => {
		try {
			const { id } = req.params;
			const Profileuser = await profileUser.findById(id);
			const data = Profileuser;

			res.status(200).json({
				message: 'success get profile user data by id',
				data,
			});
			return;
		} catch (error) {
			console.log(error);
		}
	},

	updateProfileUserByID: async (req, res) => {
		try {
			const { id } = req.params;
			const Profileuser = await profileUser.findById(id);
			const data = Profileuser;

			Object.assign(Profileuser, req.body);
			Profileuser.save();
			res.status(201).send({
				message: 'success update profile User',
				data,
			});
		} catch (error) {
			console.log(error);
		}
	},

	deleteProfileUserByID: async (req, res) => {
		try {
			const { id } = req.params;
			const Profileuser = await profileUser.findById(id);
			const data = Profileuser;

			if (!Profileuser) {
				res.status(404).json({
					message: 'profile User data not Found',
				});
			} else {
				Profileuser.deleteOne();
				res.json({ message: 'profile user Data Deleted!' });
			}
		} catch (error) {
			console.log(error);
		}
	},

	deleteAllProfileUser: async (req, res) => {
		try {
			const Profileuser = await profileUser.deleteMany();
			data = Profileuser;

			res.json({
				message: 'success delete all profile User data',
				data,
			});
			return;
		} catch (error) {
			console.log(error);
		}
	},
};
