const express = require("express");
const router = express.Router();
const auth = require("../Middleware/authMiddleware");
const authorizeRole = require("../Middleware/authorizationMiddleware");
const { addCategory, updateCategory } = require("../Controllers/categoryControllers"); // Import the updateCategory controller


/**
 * @description To get all categories
 * @api /api/category/create
 * @access PUBLIC
 * @type POST
 * @return response
 */

router.post("/create", auth, authorizeRole('admin'), addCategory);

/**
 * @description To update a category
 * @api /api/category/update/:id
 * @access PRIVATE
 * @type PUT
 * @return response
 */
router.put("/update/:id", auth, authorizeRole('admin'), updateCategory);

module.exports = router;
