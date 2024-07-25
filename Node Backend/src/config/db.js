const mongoose =require("mongoose");
// Import env variables
require("dotenv").config();
const mongoURI = process.env.db_url;

const ConnectDB = async () => {
    try{
        await mongoose.connect(mongoURI);
        console.log("MongoDB Connected");
    } catch {
      console.log(error);
} 
}

module.exports = ConnectDB;