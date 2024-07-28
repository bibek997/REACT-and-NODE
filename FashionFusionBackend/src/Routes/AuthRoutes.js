// AuthRoutes

// POST /api/auth/register - Register a new user.
// POST /api/auth/login - Log in a user.
const express = require('express');
const { register, login } = require('../controllers/AuthController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;
