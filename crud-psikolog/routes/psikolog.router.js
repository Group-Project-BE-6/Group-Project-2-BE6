const express = require("express");
const router = express.Router();

const {
  getAllPsikolog,
  getPsikologByID,
  addPsikolog,
  deletePsikologByID,
  updatePsikologByID,
  deleteAllPsikolog,
} = require("../controllers/psikolog.controller");

router.get("/", getAllPsikolog);
router.get("/:id", getPsikologByID);
router.post("/", addPsikolog);
router.delete("/:id", deletePsikologByID);
router.delete("/", deleteAllPsikolog);
router.put("/:id", updatePsikologByID);

module.exports = router;
