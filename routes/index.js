'use strict';
/*  Middleware to combine all routes. */
var express = require('express');
var router = express.Router();
var defaults = require('./DefaultRoutes');
var registration = require('./RegistrationRoutes');
var auth = require('./AuthorizationRoutes');


router.use('/defaults', defaults);
router.use('/auth', auth);
router.use('/registration', registration);


module.exports = router;