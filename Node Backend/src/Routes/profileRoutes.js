const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const { profileImage } = require('../middleware/uploadMiddleware');
const auth = require('../middleware/authMiddleware');

/**
 * @description To update user profile
 * @api /api/profile/update
 * @access PRIVATE
 * @type PUT
 * @return response
 */
router.put('/update', auth, profileImage.single('profileImage'), profileController.updateUserProfile);

/**
 * @description To get the authenticated user's profile
 * @api /api/profile/
 * @access PRIVATE
 * @type GET
 * @return response
 */
router.get('/', auth, profileController.getUserProfile);

/**
 * @description To get all user profiles
 * @api /api/profile/all
 * @access PRIVATE
 * @type GET
 * @return response
 */
router.get('/all', auth, profileController.getAllUserProfiles);

/**
 * @description To get a user profile by ID
 * @api /api/profile/:id
 * @access PRIVATE
 * @type GET
 * @return response
 */
router.get('/:id', auth, profileController.getUserProfileById);

/**
 * @description To delete the authenticated user's profile
 * @api /api/profile/delete
 * @access PRIVATE
 * @type DELETE
 * @return response
 */
router.delete('/delete', auth, profileController.deleteUserProfile);

module.exports = router;