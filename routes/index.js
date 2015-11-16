'use strict';

var express = require('express'),
    router = express.Router(),
    defaults = require('./DefaultRoutes'),
    auth = require('./AuthorizationRoutes'),
    user = require('./UserRoutes'),
    project = require('./ProjectRoutes'),
    forgotPassword = require('./ForgotPasswordRoutes');

router.use('/defaults', defaults);
router.use('/auth', auth);
router.use('/user', user);
router.use('/project', project);
router.use('/forgot-password', forgotPassword);

module.exports = router;