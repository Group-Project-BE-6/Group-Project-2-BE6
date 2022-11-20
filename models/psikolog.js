const mongoose = require('mongoose');
const { Schema } = mongoose

// schema untuk data dokter
const psikologSchema = new Schema({
    name: String,
    gender: String,
    age: String
})

const Psikolog = mongoose.model("Psikolog", psikologSchema)

module.exports = Psikolog