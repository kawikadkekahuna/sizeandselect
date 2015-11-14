'use strict';
var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');
var User = require('../models').User;
var bcrypt = require('bcrypt');

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

router.get('/logout', function (req, res){
  res.header('Bearer', '');
  req.logout();
  res.json({status:200, message:'Logout successful'});
});

router.post('/register' , function (req,res){
  console.log(req.body);
  User.find(
    { where : {
        $or: [
          {
            username : req.body.username
          },
          {
            email : req.body.email
          }
        ]
      }
    }
  ).then(function (user){
    if (user) {
      res.json({
        status: 401,
        error: 'Unauthorized',
        message: 'The username or email currently exists in the database'
      });
    } else {
      createUser(req);
      var payload =  {
        iss: 'sizeselect.com',
        iat: Date.now()
      };
      var token = jwt.sign({payload: payload}, 'sushisecret');
      req.body.sizeselect_access_token = token;
      res.status(200).json(req.body);
    };
  });
});


function createUser(req){
  var password = req.body.password;

  User.create({
    username: req.body.username,
    // first_name: req.body.first_name,
    // last_name: req.body.last_name,
    email: req.body.email,
    password: generateHash(password)
    // city: req.body.city,
    // state: req.body.selectedState.name,
    // zipcode: req.body.zipcode,
    // company: req.body.company,
    // job_title: req.body.job_title,
    // phone_number: req.body.phone_number,
    // user_picture: req.body.user_picture,
    // account_hidden: DEFAULT_HIDDEN
  })
};

function generateHash(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
};


module.exports = router;