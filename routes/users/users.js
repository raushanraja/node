// Impoting modules
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');

// Instantiating Router
const router = express.Router();

// Importing jsonWebToken auth object
const auth = require('../auth');

// Accessing mongoose model
const Users = mongoose.model('Users');



// Creating & Handling routes

// '/':POST for registering new user, uses auth.optional
router.post('/', auth.optional, (req, res, next) => {
    const { body: { user } } = req;
    // Check for empty entries
    if (!user.email) {
        return res.status(422).json({
            errors: {
                email: 'is required',
            },
        });
    }

    if (!user.password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            },
        });
    }

    const finalUser = new Users(user);
    finalUser.setPassword(user.password);

    return finalUser.save()
        .then(() => {
            res.json({ user: finalUser.toAuthJSON() })
        });
});


// '/':POST for login user after validation , uses auth.optional
router.post('/login', auth.optional, (req, res, next) => {
    const { body: { user } } = req;
    console.log(req);
    // Check for empty entries
    if (!user.email) {
        return res.status(422).json({
            errors: {
                email: 'is required',
            },
        });
    }

    if (!user.password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            },
        });
    }

    // Authenticate and return response
    return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
        if (err) {
            return next(err);
        }
        if (passportUser) {
            const user = passportUser;
            user.token = passportUser.generateJWT();
            res.cookie('jwt', user.toAuthJSON(), { httpOnly: true, secure: true });
            return res.redirect({ user: user.toAuthJSON() });
        }
        return res.status(400).send(info);
    })(req, res, next);
});

//'/current':GET return current route, uses auth.required so that only authorized person have access
router.get('/current', auth.required, (req, res, next) => {
    const { payload: { id } } = req;
    console.log(req)
    return Users.findById(id)
        .then((user) => {
            if (!user) {
                return res.sendStatus(400);
            }

            return res.json({ user: user.toAuthJSON() });
        });
});


//   Exporting router
module.exports = router;