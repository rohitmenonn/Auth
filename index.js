const express = require('express');
const dotenv = require('dotenv'); // Used to create and store enviroment variables (To store sensitive data you dont wish to show in your code)
const mongoose = require('mongoose');
const app = express();

// Import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');
const profileRoute = require('./routes/profile');
const { string } = require('@hapi/joi');

dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to DB");
});

// Middleware
app.use(express.json());

// Route middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/profile', profileRoute);

app.listen(3000, () => console.log("Server running"));