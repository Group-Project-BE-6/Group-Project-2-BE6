const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileUserSchema = new Schema({
	nama: String,
	gender: String,
	umur: String,
	alamat: String,
	noHp: String,
	idUser: {
		type: Object,
		ref: 'user',
	},
});

const profileUser = mongoose.model('profileUser', profileUserSchema);

module.exports = profileUser;
