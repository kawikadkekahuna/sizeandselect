'use strict';
/*  Middleware to combine all routes. */
var express = require('express');
var router = express.Router();
var defaults = require('./DefaultRoutes');
var registration = require('./RegistrationRoutes');
var login = require('./LoginRoutes');
var logout = require('./LogoutRoutes');


router.use('/defaults', defaults);
router.use('/login', login);
router.use('/logout', logout);
router.use('/registration', registration);


module.exports = router;