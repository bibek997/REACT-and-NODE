// const math = require('./math');
// const file = require('./file');

// const readfile = file.readfile;

// // Create serverusing http models
// const http = require('http');
// const server = http.createServer((req,res) =>{
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write('Hello World');
//     res.end();
// }
// )

// server.listen(3000,()=>{
//     console.log('Server is runiing on port 3000');
// })

// GET retrieves data.
// POST creates data.
// PUT updates data entirely.
// PATCH allows partially updating data.
// DELETE removes data.

// const express=require('express');
// const { param } = require('express/lib/request');
// const port = 4000;
// const app=express();

// app.use(express.json());
// app.get('/',(req,res)=>{
//     res.send('Hello World');
// });

// const users =[
//     {
//         id: 1,
//         name: "John"
//     },
//     {
//         id: 2,
//         name: "Doe"
//     },
// ];

// app.get('/users',(req,res)=>{
//     const user = req.body;
//     // res.send(Users);
//     res.json(users)
// });

// app.get("/users/:id",(req,res)=>{

//     const user_id = req.params.id;
//     console.log(user_id)
//     const user = users.find((user) => user.id === parseInt(user_id));
//     if(!user){
//         res.status(404).send("User not found");
//     }
//     res.send(user);
//     }
// );

// app.post('/post-user',(req,res)=>{
//     // const data = req.body;
//     // const name = data.name;
//     const name = req.body.name;
//     // const section = req.body.section;
//     res.send(name);

// });

// app.listen(4000,()=>{
//     console.log(`Server is running on ${port}`);
// })




// const express=require('express');
// require('dotenv').config();
// const port = process.env.port;
// const app=express();
// app.use(express.json());

// const connectDB = require("./src/Config/db")
// const userRoute = require('./src/Routes/userRoute')
// // const bikeRoute = require('./src/Routes/bikeRoute')
// const authRoute = require('./src/Routes/authRoute')
// connectDB();

// app.use('/api',userRoute)
// app.use('/api/auth',authRoute)


// app.listen(port,()=>{
//     console.log(`Server is running on ${port}`);
// });


// const express =require('express');
// const app =express();

// const connectDB =require("./src/config/db")
// const userRoute=require("./src/Routes/userRoute")
// const authRoute=require("./src/Routes/authRoute")
// require('dotenv').config();

// app.use(express.json());
// // const port =process.env.port;
// const port=5000;
// connectDB();

// // app.use('/product', userRoute)
// app.use('/api', userRoute)
// app.use('/api/auth', authRoute);

// app.listen(port,()=>{
//     console.log(`server is connected on ${port}`)
// });


const express = require("express");
const connectDB = require("./src/Config/db");
const userProfileRoutes = require("./src/Routes/userProfileRoute");
const authRoutes = require("./src/Routes/authRoute");
const profileRoutes = require("./src/Routes/profileRoute");
const categoryRoutes = require("./src/Routes/categoryRoute");
const productRoutes = require('./src/Routes/productRoutes');

const app = express();
const port = 4000;
connectDB();
app.use(express.json());

app.use("/user", userProfileRoutes);
app.use('/api/auth/', authRoutes);

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use('/api/profile', profileRoutes);

app.use('/api/category',categoryRoutes)

app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});