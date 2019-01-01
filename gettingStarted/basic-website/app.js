const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    res.send("Welcome to Index page.");
});

app.listen(3100,()=>{
    console.log("Listening at port:3100");
});