const mongoose = require('mongoose');
const {Schema} = mongoose; // Destructing
// const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
      },

    // address: {
    //     type: String,
    //     required: true
    // },
    // phone: {
    //     type: Number,
    //     required: true
    // },
    // date: {
    //     type: Date,
    //     default: Date.now
    // },
    
});


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;