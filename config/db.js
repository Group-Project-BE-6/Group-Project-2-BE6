const mongoose = require('mongoose');

const DB_URL = ("mongodb://localhost:27017/konsul-sapasikolog");

const db = mongoose.connect(DB_URL);

module.exports = db;