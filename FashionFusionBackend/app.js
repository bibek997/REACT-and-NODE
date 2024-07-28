const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./src/Routes/AuthRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fashionfusion', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use routes
app.use('/api/auth', authRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
