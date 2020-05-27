//  Importing Packages
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

// Accessing User model from mongoose
const Users = mongoose.model('Users');

// Configuring Passport
passport.use(new LocalStrategy({
    usernameField : 'user[email]',
    passwordField : 'user[password]',
    },
    (email,password,done)=>{
        Users.findOne({email})
        .then((user)=>{
            if(!user || !user.validatePassword(password)){
                return done(null,false,{errors:{'email or password' : 'is invalid'}});
            }

            return done(null,user);
        }).catch(done);
    }
));