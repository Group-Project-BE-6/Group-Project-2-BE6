const express = require('express');
const router = express.Router();

const {
	getAllProfileUser,
	getProfileUserByID,
	updateProfileUserByID,
	deleteProfileUserByID,
	deleteAllProfileUser,
} = require('../controllers/profileUser.controller');

router.get('/', getAllProfileUser);
router.get('/:id/', getProfileUserByID);
router.put('/:id/', updateProfileUserByID);
router.delete('/:id/', deleteProfileUserByID);
router.delete('/', deleteAllProfileUser);

module.exports = router;
