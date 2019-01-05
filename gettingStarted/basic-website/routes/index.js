const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    res.render('index',{title:'Hexweb'});
});

router.post('/b',(req,res) =>{
    res.send("Hello");
    // res.send(req.body.title);
});

router.post('/bo',(req,res) =>{
    res.send("Hello");
    var i =req.body;
    console.log(i);
});
module.exports= router;