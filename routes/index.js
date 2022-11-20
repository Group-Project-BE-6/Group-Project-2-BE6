const express = require('express');
const router = express.Router();

const konsultasi = require('./konsultasi.router');
const profileUser = require('./profileUser.router');

router.use('/konsultasi', konsultasi);
router.use('/profileUser', profileUser);

module.exports = router;
