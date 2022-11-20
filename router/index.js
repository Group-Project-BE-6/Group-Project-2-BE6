const express = require('express');
const router = express.Router();

const userPsikologRouter = require('./userPsikolog.router')
const psikologRouter = require("./psikolog.router")
const pasienRouter = require('./pasien.router')
const konsulRouter = require('./konsul.router');
const userPasienRouter = require('./userPasien.router');

router.use('/userpasien',userPasienRouter)
router.use('/userPsikolog', userPsikologRouter)
router.use('/psikolog', psikologRouter)
router.use('/pasien', pasienRouter)
router.use('/konsul', konsulRouter)

module.exports = router;