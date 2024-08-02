const Product = require('../Models/productModel');
const mongoose = require('mongoose');

// Controller to add a new product
const addProduct = async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const image = req.file ? req.file.path : null;

    // Ensure category is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(category)) {
      return res.status(400).json({ message: 'Invalid category ID' });
    }

    const newProduct = new Product({
      name,
      price,
    
      category,
      image,
    });

    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', newProduct });
  } catch (err) {
    res.status(500).json({ message: 'Error adding product', err });
  }
};

// Controller to update a product
const updateProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, price, category } = req.body;
  
      // Check if all required fields are provided
      if (!name || !price || !category) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      // Find the product by ID and update it
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        {
          name,
          price,
          category,
          image: req.file ? req.file.path : undefined // Update image path if provided
        },
        { new: true } // Return the updated document
      );
  
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.status(200).json(updatedProduct);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error updating product', err });
    }
  };
  

module.exports = { addProduct, updateProduct };
