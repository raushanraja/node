// Importing packages
const express = require('express');
// Initiating Router from express
const router = express.Router();
// Importing api route
const users = require('./users');
// Adding routes to router
router.use('/users', users);
// Exporting router
module.exports = router;