const express = require('express');
const router = express.Router();
const verifyPasien = require('../middleware/pasien.auth');

const {
  getPasienByID
} = require("../controller/pasien.controller");

const {
  getKonsulByID
} = require("../controller/konsul.controller");

const { loginPasien } = require('../controller/pasien.controller');

router.post('/login', loginPasien);
router.get("/:id",verifyPasien, getPasienByID);
router.get("/:id",verifyPasien, getKonsulByID);

module.exports = router;