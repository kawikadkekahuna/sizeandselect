'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models').User;
var bodyParser = require('body-parser');
var DEFAULT_HIDDEN = true;
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


/**
 * [POST]
 * [If user successfully logins]
 * send status 200 eg:
 * res.status(200).send(..{}..)
 * Add Bearer token to Headers.
 *
 * [If user unsuccessfuly tried to sign in]
 * Send status 401 eg:
 * res.status(401).send({error:'Unauthorized',status:'401',message:'Invalid credentials'})
 *
 */

 // router.post('/login', passport.authenticate('local', {
 //   successRedirect: '/',
 //   failureRedirect: '/login',
 //   failureFlash : true
 // }));

router.post('/', function (req, res, next) {

  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (user === false) {
      res.status(401).send(info.message);
    } else {
      res.status(200).send({message:'success',status:200});
    }
  })(req, res, next);
});

module.exports = router;