const express = require('express');
const UserProfile = require('../Models/userProfile');
const router = express.Router();

// Controller to add a new user profile to the database
const addUserProfile = (req, res) => {
    const { name, email } = req.body;

    const newUserProfile = new UserProfile({ name, email });

    newUserProfile
        .save()
        .then((data) => {
            res.status(200).json({ message: "User profile added successfully", data });
        })
        .catch((err) => {
            res.status(500).json({ message: "Error adding user profile", err });
        });
};

module.exports = { addUserProfile };
