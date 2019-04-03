var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
    res.send("Reply from users");
});


module.exports = router;