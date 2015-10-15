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

router.post('/', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      console.log('@@@@@@@@@@@@@@err@@@@@@@@@@@@@@');
      console.log(err);
      return next(err); 
    }
    if (user === false) {
      res.status(401).send(info.message);  
    } else {
      res.status(200).send(info.message); 
    }
  })(req, res, next); 
});

module.exports = router;