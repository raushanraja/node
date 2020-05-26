// Importing packages
const express = require('express');

// Initiating Router from express
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Hexweb Template' });
});

// Importing users route
const users = require('./users/users');

// Adding routes to router
router.use('/users', users);

// Exporting router
module.exports = router;