'use strict';
/*  Middleware to combine all routes. */
var express = require('express');
var router = express.Router();
var defaults = require('./DefaultRoutes');
var auth = require('./AuthorizationRoutes');
var user = require('./UserRoutes');

router.use('/defaults', defaults);
router.use('/auth', auth);
router.use('/user', user);

module.exports = router;