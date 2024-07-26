// const mongoose=require('mongoose');
// // descturcture Schema from mongoose
// const {Schema}=mongoose;

// const userProfileSchema=new Schema({
     
//     name:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         required:true
//     },
// });


// const UserProfile=mongoose.model('UserProfile',userProfileSchema);
// module.exports=UserProfile;


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
    // add other attributes 
});

module.exports = mongoose.model('Profile', profileSchema);