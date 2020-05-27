// importing packages
const jwt = require('express-jwt');

// Extracting tokens from data sent by users
const getTokenFromHeaders = (req) => {
    const { headers: { authorization } } = req;
    if (authorization && authorization.split(' ')[0] === 'Token') {
        return authorization.split(' ')[1];
    }
    return null;
};

// JWT auth obejct with optional and required property
const auth = {
    required: jwt({
        secret: 'raushan',
        userProperty: 'payload',
        getToken: getTokenFromHeaders,
    }),

    optional: jwt({
        secret: 'raushan',
        userProperty: 'payload',
        getToken: getTokenFromHeaders,
        credentialsRequired: false,
    }),
};


// Exporting Module
module.exports = auth;
