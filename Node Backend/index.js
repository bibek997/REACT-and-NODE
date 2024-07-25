// // index.js
// const math = require('./math');//import
// const fs = require('fs');

// const { request, response } = require("express");

// // Use the add function from the math module
// let sum = math.add(5, 2);
// console.log(sum);

// // Use the subtract function from the math module
// let difference = math.subtract(5, 3);
// console.log(difference);

// // Use the multiply function from the math module
// let product = math.multiply(6, 2);
// console.log(product);

// // Use the divide function from the math module
// let quotient = math.divide(1, 2);
// console.log(quotient);

// // CRUD operations

// // Create and write to a file
// const createFile = (filename, content) => {
//     fs.writeFile(filename, content, (err) => {
//         if (err) {
//             console.error('Error creating file:', err);
//             return;
//         }
//         console.log('File ${filename} created successfully.');
//     });
// };

// // Read from a file
// const readFile = (filename) => {
//     fs.readFile(filename, 'utf-8', (err, data) => {
//         if (err) {
//             console.error('Error reading file:', err);
//             return;
//         }
//         console.log('Content of ${filename}:');
//         console.log(data);
//     });
// };

// // Update a file (append content)
// const updateFile = (filename, content) => {
//     fs.appendFile(filename, content, (err) => {
//         if (err) {
//             console.error('Error updating file:', err);
//             return;
//         }
//         console.log('File ${filename} updated successfully.');
//     });
// };

// // Delete a file
// const deleteFile = (filename) => {
//     fs.unlink(filename, (err) => {
//         if (err) {
//             console.error('Error deleting file:', err);
//             return;
//         }
//         console.log('File ${filename} deleted successfully.');
//     });
// };

// const filename = 'data.txt';

// createFile(filename, 'This is the initial content.\n');

// readFile(filename);

// updateFile(filename, 'This is the appended content.\n');

// setTimeout(() => readFile(filename), 1000);

// setTimeout(() => deleteFile(filename), 2000);


// print hello world in https
// const http=require('http');
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'content-Type':'Text/html'});
//     res.write('Hello World');
//     res.end();
// }
// );
// server.listen(3000,()=>{
//     console.log('server is running')
// });

// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (request, response) => {
//     response.send('Hello Bibek');
// });

// const users = [
//     { id: 1, name: "Bibek" },
//     { id: 2, name: "Bibek" },
//     { id: 3, name: "Bibek" },
//     { id: 4, name: "Bibek" }
// ];

// app.get('/getUsers', (request, response) => {
//     response.json(users);
// });

// app.get('/getUsers/:id', (request, response) => {
//     const id = parseInt(request.params.id);
//     const user = users.find(user => user.id === id);
//     if (user) {
//         response.json(user);
//     } else {
//         response.status(404).send('User not found');
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });








// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/FashionFusion')
// .then(() => console.log('Connected to MongoDB...'));

// index.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });



// const express = require('express');
// const ConnectDB = require("./src/config/db");
// const userProfileRoutes=require('./src/Routes/userProfileRoutes');
// const index = express(); 
// const port = process.env.port;



// ConnectDB();
// app.use(express.json());


// app.use('/user',userProfileRoutes);

// app.listen(port,()=>{
//     console.log('server is running on port $(Port)');
// })

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("./src/config/db");
const userProfileRoutes = require('./src/Routes/userProfileRoutes');

dotenv.config();

const app = express(); 
const port = process.env.PORT || 5000;

connectDB();
app.use(express.json());

app.use('/user', userProfileRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
