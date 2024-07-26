const mongoose = require("mongoose");
// import env variables
require("dotenv").config();
const mongoURI = process.env.db_url;
 

 const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;
