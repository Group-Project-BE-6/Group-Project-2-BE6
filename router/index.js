const express = require('express');
const router = express.Router();

const konsulRouter = require('./konsul.router');
const userPasienRouter = require('./userPasien.router');

router.use('/userpasien', userPasienRouter);
router.use('/konsul', konsulRouter);

module.exports = router;
