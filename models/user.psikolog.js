const mongoose = require('mongoose');
const { Schema } = mongoose

// untuk user dokter
const userPsikologSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true
    },
    password: String
})

const UserPsikolog = mongoose.model("UserDokter", userPsikologSchema)

module.exports = UserPsikolog