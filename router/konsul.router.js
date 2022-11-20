const express = require('express');
const router = express.Router();
const verifyPsikolog = require('../middleware/psikolog.auth');

const {
  getAllKonsul,
  getKonsulByID,
  addKonsul,
  deleteKonsulByID,
  updateKonsulByID,
  } = require("../controller/konsul.controller");
  
  router.get("/",verifyPsikolog, getAllKonsul);
  router.get("/:id",verifyPsikolog, getKonsulByID);
  router.post("/add",verifyPsikolog, addKonsul);
  router.delete("/:id",verifyPsikolog, deleteKonsulByID);
  router.put("/:id",verifyPsikolog, updateKonsulByID);

module.exports = router;