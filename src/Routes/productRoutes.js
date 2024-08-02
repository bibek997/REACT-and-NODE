const express = require('express');
const productController = require('../Controllers/productControllers');
const auth = require('../Middleware/authMiddleware');
const { productImage } = require('../Middleware/uploadMiddleware');
const router = express.Router();

/**
 * @description To add a new product
 * @api /api/products/add
 * @access PRIVATE
 * @type POST
 * @return response
 */
router.post('/add', auth, productImage.single('image'), productController.addProduct);

/**
 * @description To update a product
 * @api /api/products/update/:id
 * @access PRIVATE
 * @type PUT
 * @return response
 */
router.put('/update/id', auth, productImage.single('image'), productController.updateProduct);

module.exports = router;
