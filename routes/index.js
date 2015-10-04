'use strict';
/*  Middleware to combine all routes. */
var express = require('express');
var router = express.Router();
var defaults = require('./DefaultRoutes');
var registration = require('./RegistrationRoutes');
var login = require('./LoginRoutes');
var projects = require('./ProjectRoutes');

router.use('/defaults', defaults);
router.use('/login',login);
router.use('/registration',registration);
router.use('/projects',projects);



module.exports = router;