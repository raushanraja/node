const socket=require('socket.io')
const path = require('path')
const express = require('express');
const app = express();
const indexRouter=require('./routes/index')
const cp = require('cookie-parser')
const bp =require('body-parser')
const port = process.env.PORT || 4500;
const pug = require('pug')


app.use(cp())
.use(bp.json())
.use(bp.urlencoded({extended:true}))

app.set('views',path.join(__dirname,'views'))
.use(express.static(path.join(__dirname,'public')))
.set('view engine','pug')    
.use('/',indexRouter)

app.locals.pretty = true;                                     // formats the output html, can be removed when deploying


const server=app.listen(port,(err,data)=>{
    if(!err){
        console.log('Server Started on port',port);
    }
    else{
        console.log('Error Occured');
        
    }
})

const io = socket(server);

io.on('connect', (socket) => {
    console.log(socket.id);
    
    socket.on('message', (data) => {
        console.log(data);
        socket.broadcast.emit('message',data);
    })
})





