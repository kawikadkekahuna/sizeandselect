(function () {
  'use strict';
  var express = require('express');
  var router = express.Router();
  var passport = require('passport');
  var jwt = require('jsonwebtoken');
  var User = require('../models').User;
  var bcrypt = require('bcrypt');
  var Promise = require('bluebird');

  router.get('/isAuthenticated', function (req, res){
    var token = req.headers.authorization;

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
      }
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

  router.post('/register', function (req, res) {

    const form = req.body;
    createUser(form)
      .then(function () {
        res.sendStatus(201);
      })
      .catch({code: 400}, function (err) {
          console.error(err);
          res.sendStatus(400);
      })
      .catch(function (err) {
          console.error(err);
          res.sendStatus(500);
      });
  });

  // router.post('/register' , function (req,res){
  //   User.find(
  //     { where : {
  //         $or: [
  //           {
  //             username : req.body.username
  //           },
  //           {
  //             email : req.body.email
  //           }
  //         ]
  //       }
  //     }
  //   ).then(function (user){
  //     if (user) {
  //       res.json({
  //         status: 401,
  //         error: 'Unauthorized',
  //         message: 'The username or email currently exists in the database'
  //       });
  //     } else {
  //       createUser(req).then(function (user){
  //         var newUser = {};
  //         var payload =  {
  //           iss: 'sizeselect.com',
  //           iat: Date.now()
  //         };
  //         var token = jwt.sign({payload: payload}, 'sushisecret');
  //         req.body.sizeselect_access_token = token;
  //         newUser.token = token;
  //         newUser.id = user.id;
  //         res.status(200).json(newUser);
  //       })
  //     };
  //   });
  // });

  function usernameAndEmailAreUnique(username, email) {

    return getMeAllUsers()
      .then(function (users) {

        const usernameOrEmailExists = users.some(function (user) {
          const usernamesMatch = user.username.toLowerCase() === username.toLowerCase();
          const emailsMatch = user.email === email;

          return usernamesMatch || emailsMatch;
        });


        if (usernameOrEmailExists) {
          throw {code: 400, message: 'That username or email already exists.'};
        }
      });
  }

  function getMeAllUsers() {
    return User.findAll();
  }

  function createUser(form){
    const username = form.username;
    const email = form.email;
    const password = form.password;

    return Promise.resolve()
      .then(function () {
        return usernameAndEmailAreUnique(username, email);
      })
      .then(function () {
        return User.create({
          username: username,
          email: email,
          password: generateHash(password)
          // first_name: req.body.first_name,
          // last_name: req.body.last_name,
          // city: req.body.city,
          // state: req.body.selectedState.name,
          // zipcode: req.body.zipcode,
          // company: req.body.company,
          // job_title: req.body.job_title,
          // phone_number: req.body.phone_number,
          // user_picture: req.body.user_picture,
          // account_hidden: DEFAULT_HIDDEN
        });
      });
  }

  function generateHash(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  }


  module.exports = router;
}());