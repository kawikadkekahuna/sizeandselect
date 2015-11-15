'use strict'

var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken')


router.post('/', function (req, res){
  jwt.verify(req.headers.bearer, 'sushisecret', function (err, decoded){
    if(decoded){
      res.json({message:'success'});
    }else{
      res.status(401).send({
        error:'Unauthorized', 
        status: 401, 
        message:'Invalid or expired access token.'
      });
    };
  });
});

module.exports = router;