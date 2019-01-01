const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    res.send("Hello from routes/index.js ");
});

module.exports= router;