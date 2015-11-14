'use strict';
var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken')

router.get('/logout', function (req, res){
  res.header('Bearer', '');
  req.logout();
  res.status(200).send({message:'logout success', status:200});
});

router.get('/isAuthenticated', function (req, res){
  var token = req.headers.bearer;
  jwt.verify(token, 'sushisecret', function (err, decoded){
    if(decoded){
      res.status(200).send({
        status: 200,
        message: 'success'
      });
    }else{
      res.json({
        error:'Unauthorized', 
        status: 401, 
        message:'Invalid or expired access token.'
      });
    };
  });
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
        error: 'Unauthorized'
      });
    } else {

      var payload =  {
        iss: 'sizeselect.com',
        iat: Date.now()
      };
      
      var token = jwt.sign({payload: payload}, 'sushisecret');
     
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