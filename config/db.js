const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/project2-be6';
const db = mongoose.connect(DB_URL);

module.exports = db;
