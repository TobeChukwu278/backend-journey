// Setting up the express server foundation
const express = require('express');
const app = express(); //creating an instance of an Express application
const PORT = 3000 || 4500;

// Middleware to parse JSON bodies
app.use(express.json());


// Defining a simple route, to log details of incoming requests
app.get('/', (req, res) => {
    res.send('Welcome to the Express server 🌏');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});