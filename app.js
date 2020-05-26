// Importing required packages
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const morgan = require('morgan')
const ENV = require('dotenv')

// Creating const to get current Environment setup
ENV.config()
const isProduction = process.env.NODE_ENV === 'production'


// Configure Routes
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')



// Configure App
const app = express();

// Format HTML Output in development 
app.locals.pretty = !isProduction;

app
    .use(cors())
    .use(morgan('dev'))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cookieParser('raushan'))
    .use(session({
        secret: 'raushan',
        cookie: {
            maxAge: 60000
        },
        resave: false,
        saveUninitialized: false
    }))
    .use('/',indexRouter)
    .use('/users',usersRouter)
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'pug')




// Error handling
if (!isProduction) {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message,
                error: "err",
            },
        });
    });
}
else {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message,
                error: {},
            },
        });
    });
}



// Start App
app.listen(process.env.PORT || 3000, () => {
    console.log(`started at http://localhost:${process.env.PORT||3000}`);
});
console.log("Production?:",isProduction);