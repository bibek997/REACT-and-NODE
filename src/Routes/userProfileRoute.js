const express=require('express');
const userProfile = require('../Controllers/userProfileControllers');
const router=express.Router();

router.post('/userProfile',userProfile);



module.exports=router;