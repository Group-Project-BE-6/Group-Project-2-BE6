const express = require("express");
const router = express.Router();


// untuk data user dokter
const {
    getAllPsikolog,
    getPsikologByID,
    addPsikolog,
    deletePsikologByID,
    updatePsikologByID,
    loginPsikolog
} = require("../controller/psikolog.controller");

router.get("/allPsikolog", getAllPsikolog);
router.get("/:id", getPsikologByID);
router.post("/addPsikolog", addPsikolog);
router.delete("/:_id", deletePsikologByID);
router.put("/:id", updatePsikologByID);
router.post("/login", loginPsikolog);

// untuk data user pasien
const {
    getAllPasien,
    getPasienByID,
    addPasien,
    deletePasienByID,
    updatePasienByID,
  } = require("../controller/pasien.controller");
  
  router.get("/allDataPasien", getAllPasien);
  router.get("/pasien/:id", getPasienByID);
  router.post("/addPasien", addPasien);
  router.delete("/pasien/:id", deletePasienByID);
  router.put("/pasien/:id", updatePasienByID);


module.exports = router;

