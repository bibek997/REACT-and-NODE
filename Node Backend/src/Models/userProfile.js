const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;
