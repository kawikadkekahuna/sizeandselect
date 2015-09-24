'use strict';
/*  Middleware to combine all routes. */
var express = require('express');
var router = express.Router();
var user_routes = require('./UserRoutes');

router.use('/user_routes', user_routes);

module.exports = router;