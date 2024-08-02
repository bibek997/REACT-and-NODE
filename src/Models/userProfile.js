// models/profile.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bio: {
        type: String,
        maxlength: 500
    },
    profileImage: {
        type: String // Store the URL of the uploaded image
    },
});

module.exports = mongoose.model('Profile', profileSchema);