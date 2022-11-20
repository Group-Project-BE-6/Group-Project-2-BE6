const express = require('express');
const router = express.Router();

const {
  getAllUserPsikolog,
  getUserPsikologByID,
  addUserPsikolog,
  deleteUserPsikologByID,
  updateUserPsikologByID,
} = require("../controller/user.controllers");

router.get("/allPsikolog", getAllUserPsikolog);
router.get("/:id", getUserPsikologByID);
router.post("/register", addUserPsikolog);
router.delete("/:id", deleteUserPsikologByID);
router.put("/:id", updateUserPsikologByID);

module.exports = router;