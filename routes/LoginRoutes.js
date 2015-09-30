'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models').User;
var bodyParser = require('body-parser');
var DEFAULT_HIDDEN = true;

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
router.post('/' , function (req,res){

  res.status(401).send({
    error: 'Unauthorized',
    status: '401',
    message: 'Invalid Credentials'
  });

});

module.exports = router;