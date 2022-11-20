const mongoose = require('mongoose');
const { Schema } = mongoose

// schema untuk data rekam medis
const dataKonsulSchema = new Schema({
    pasien : {
        type :  mongoose.ObjectId,
        ref : "DataPasien"
    },
    psikolog : {
        type :  mongoose.ObjectId,
        ref : "Psikolog"
    },
    keluhan : String,
    Desc_keluhan : String,
    tanggal_periksa : Date
})

const dataKonsul = mongoose.model("DataKonsul", dataKonsulSchema)

module.exports = dataKonsul