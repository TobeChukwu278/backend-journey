const express = require('express');
const router = express.Router();
const User = require('../models/User')

// routing to get all users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// route to post or add a new user
router.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
});

module.exports = router