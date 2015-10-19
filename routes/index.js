'use strict';
/*  Middleware to combine all routes. */
var express = require('express');
var router = express.Router();
var defaults = require('./DefaultRoutes');
var registration = require('./RegistrationRoutes');
var login = require('./LoginRoutes');
var logout = require('./LogoutRoutes');
var forgotPassword = require('./ForgotPasswordRoutes');
var resetPassword = require('./ResetPasswordRoutes');


router.use('/defaults', defaults);
router.use('/login', login);
router.use('/logout', logout);
router.use('/registration', registration);
router.use('/forgot-password', forgotPassword);
router.use('/reset-password', resetPassword);


module.exports = router;