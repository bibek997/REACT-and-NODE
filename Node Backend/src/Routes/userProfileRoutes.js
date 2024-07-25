const express = require('express');
const { addUserProfile } = require('../Controllers/userProfileController');
const router = express.Router();

router.post('/userProfile', addUserProfile);

module.exports = router;
