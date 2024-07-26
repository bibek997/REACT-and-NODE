const express=require('express');
const userProfile = require('../controllers/userProifleController');
const app=express();


app.post('/userProfile',userProfile);


module.exports=app;