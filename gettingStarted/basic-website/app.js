const express = require('express');          // importing express
const path = require('path');                // importing path
const app = express();                       // instaintiating express application  
const PORT=process.env.PORT || 3000;         // setting post number to use port provided by environment, if not then 3000   

const indexRouter = require('./routes/index');                  // importing ruoter from ./routes

app
  .set('views', path.join(__dirname, 'views'))               // setting path to views folder
  .use(express.static(path.join(__dirname, 'public')))       // path to public folder which contains static files(css,js,images.,etc)
  .set('view engine', 'pug')                                 // setting view engine to render files from ./views (pug,ejs..,etc)
  .use('/', indexRouter);                                    // setting which end point to use which router

app.listen(PORT, () => {                                       // listening to specified port for incoming connnections and respond.     
    console.log("Listening at port:3000");              
});