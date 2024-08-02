const User = require("../Models/authModel");

function authorizeRole(role) {
  return async (req, res, next) => {
    // console.log(req.user);
    try {
      const user = await User.findById(req.user.id);
      //   console.log(user);

      if (!user) {
        return res.sendStatus(404); // User not found
      }

      if (user.role !== role) {
        return res.sendStatus(403); // Forbidden if user does not have the required role
      }

      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: error.message });
    }
  };
}

module.exports = authorizeRole;