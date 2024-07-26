// const User = require('../models/authUserModel');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');

// dotenv.config();

// const registerUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     let user = await User.findOne({ email });

//     if (user) {
//       return res.status(400).json({ msg: 'User already exists' });
//     }

//     user = new User({
//       name,
//       email,
//       password,
//     });

//     await user.save();

//     const payload = {
//       user: {
//         id: user.id,
//       },
//     };

//     // jwt sign to generate token
//     // jwt.sign(
//     //   payload,
//     //   process.env.JWT_SECRET,
//     //   { expiresIn: '1h' },
//     //   (err, token) => {
//     //     if (err) throw err;
//     //     res.json({ token });
//     //   }
//     // );

//     res.status(201).json({msg:"user registered successfully",user:user})
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// };

// const loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   // console.log(email)
//   // console.log(password)

//   try {
//     let user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ msg: 'Invalid credentials' });
//     }
// // console.log(user)
//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(400).json({ msg: 'Invalid credentials' });
//     }

//     // console.log(isMatch)

//     const payload = {
//       user: {
//         id: user.id,
//       },
//     };

//     jwt.sign(
//       payload,
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' },
//       (err, token) => {
//         if (err) throw err;
//         res.json({msg:"user logged in successfully",token:`Bearer ${token}`,user:user });
//       }
//     );
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// };

// module.exports = {
//   registerUser,
//   loginUser,
// };


const User = require("../models/authUserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const UserProfile = require("../models/userProfile");
const userProfile = require("../models/userProfile");

dotenv.config();

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  // const userEmail = req.body.email;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new User({
      // name,
      // email,
      // password,
      name: name,
      email: email,
      password: password,
    });

    await user.save();

    // Create profile for the new user
    const newProfile = new UserProfile({ user: user._id });
    await newProfile.save();

    // do this if you want to redirect to dashboard after registration
    // const payload = {
    //   user: {
    //     id: user.id,
    //   },
    // };

    // console.log(payload);

    // jwt.sign(
    //   payload,
    //   process.env.JWT_SECRET,
    //   { expiresIn: "1h" },
    //   (err, token) => {
    //     if (err) throw err;
    //     res.json({ token});
    //   }
    // );

    res
      .status(200)
      .json({
        msg: "User registered successfully",
        user: user,
        userProfile: newProfile,
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ msg: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ msg: "user logged in successfully", token: `Bearer ${token}`, user: user });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = {
  registerUser,
  loginUser,
};