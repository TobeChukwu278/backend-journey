// setting up express fondation
const express = require('express');
require('dotenv').config();


const PORT = process.env.PORT || 4000;

const connectDB = require('./config/db');
connectDB();

// creating an express app instance
const app = express();

// middleware for parsing reuest bodies
app.use(express.json());

// defining a simple route
app.get('/', (req, res) => {
    res.send('Hello World');
})


// starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})