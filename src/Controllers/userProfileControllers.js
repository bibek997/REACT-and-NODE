
// controller to create user profile
const UserProfile = require("../Models/userProfile");
// controller to add a new user profile to the database
const userProfile = (req, res) => {
//   const {name,email}=req.body;
  const data = req.body;
  const userName = data.name;
  const userEmail = data.email;
// const name=req.body.name;
  const newUserProfile = new UserProfile( 
    {
      name: userName,
      email: userEmail,
    }
  );
  newUserProfile
    .save()
    .then((data) => {
      res
        .status(201)
        .json({ message: "User profile added successfully", data });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error occured", err });
    });
};


module.exports = userProfile;