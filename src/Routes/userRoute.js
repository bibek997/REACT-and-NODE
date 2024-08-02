const express = require('express');
const createUser = require('../Controllers/userControllers');
const router = express.Router();

// route to create user

router.post('/createUser', createUser);

module.exports = router;