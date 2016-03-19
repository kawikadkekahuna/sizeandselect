'use strict';

var express = require('express'),
    router = express.Router(),
    defaults = require('./DefaultRoutes'),
    auth = require('./AuthorizationRoutes'),
    user = require('./UserRoutes'),
    project = require('./ProjectRoutes'),
    forgotPassword = require('./ForgotPasswordRoutes'),
    resetPassword = require('./ResetPasswordRoutes'),
    tags = require('./TagRoutes'),
    unitAnalytics = require('./UnitAnalyticsRoutes');

const Authorize = require('./utilities/authorization.js');

router.use('/user', user);
router.use('/defaults', defaults);
router.use('/auth', auth);
router.use('/project', project);
router.use('/forgot-password', forgotPassword);
router.use('/reset-password', resetPassword);
router.use('/tags',  Authorize.verify, tags);
router.use('/unitAnalytics', unitAnalytics);

module.exports = router;