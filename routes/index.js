'use strict';
/*  Middleware to combine all routes. */
var express = require('express');
var router = express.Router();
var defaults = require('./DefaultRoutes'),
    auth = require('./AuthorizationRoutes'),
    user = require('./UserRoutes'),
    project = require('./ProjectRoutes'),
    tag = require('./TagRoutes')


router.use('/user', user);
router.use('/defaults', defaults);
router.use('/auth', auth);
router.use('/project', project);
router.use('/tag', tag);

module.exports = router;