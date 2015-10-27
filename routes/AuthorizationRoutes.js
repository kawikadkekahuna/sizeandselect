'use strict';

var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken')

router.get('/logout', function (req, res){
  res.header('Bearer ', '');
  req.logout();
  res.status(200).send({message:'logout success', status:200});
});

router.post('/login', function (req, res, next) {

  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (user === false) {
      res.jsonp({
        statusCode: 401,
        message: 'Invalid Credentials',
        error: 'Unauthroized'
      });
    } else {

      var payload = {
        token: JSON.stringify(user.id) 
      };

      var token = jwt.sign({payload: payload}, 'sushisecret',{expires:'6h'})
      
      res.header('Bearer ', token); 
      res.jsonp({
        statusCode: 200,
        id: user.id,
        email: user.email,
        created_at: user.created_at,
        updated_at: user.updated_at,
        sizeselect_access_token: token
      });
    }
  })(req, res, next);
});

module.exports = router;