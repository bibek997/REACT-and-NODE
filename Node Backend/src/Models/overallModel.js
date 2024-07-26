const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ['admin', 'buyer'], required: true },
  addresses: [{ type: Schema.Types.ObjectId, ref: 'Address' }],
  cart: { type: Schema.Types.ObjectId, ref: 'Cart' },
  wishlist: [{ type: Schema.Types.ObjectId, ref: 'Wishlist' }],
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
});

// Product Schema
const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
});

// Order Schema
const OrderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }],
  paymentInfo: { type: String, required: true },
  deliveryStatus: { type: String, enum: ['pending', 'shipped', 'delivered'], required: true },
  address: { type: Schema.Types.ObjectId, ref: 'Address', required: true }
});

// Review Schema
const ReviewSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true }
});

// Category Schema
const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

// Cart Schema
const CartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }]
});

// Wishlist Schema
const WishlistSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }]
});

// Address Schema
const AddressSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  addressLine1: { type: String, required: true },
  addressLine2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true }
});

module.exports = {
  User: mongoose.model('User', UserSchema),
  Product: mongoose.model('Product', ProductSchema),
  Order: mongoose.model('Order', OrderSchema),
  Review: mongoose.model('Review', ReviewSchema),
  Category: mongoose.model('Category', CategorySchema),
  Cart: mongoose.model('Cart', CartSchema),
  Wishlist: mongoose.model('Wishlist', WishlistSchema),
  Address: mongoose.model('Address', AddressSchema)
};
