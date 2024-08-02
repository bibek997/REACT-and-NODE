// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const categorySchema = new Schema({
//   name: {
//     type: String,
//     required: [true, "Category name is required"],
//     unique: true,
//   },
//   description: {
//     type: String,
//     required: [true, "Category description is required"],
//   },
// });

// const Category = mongoose.model("Category", categorySchema);

// module.exports = Category;

const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Category name is required"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Category description is required"],
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;