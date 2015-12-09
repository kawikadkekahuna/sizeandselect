'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models').User;
var bcrypt = require('bcrypt');

function generateHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(11));
}

router.get('/', function (req, res) {
  console.log("token we are looking for", req.query.token);
  User.find({
    where : {
        reset_password_token: req.query.token,
        reset_password_expires : { $gt: Date.now() }
    }
  }).then(function (user) {
    console.log("user in the system", user);

    if (!user) {
      res.send(404).message("Bad token");
    } else {
      res.send(200);
    }

  });
});

router.put('/', function (req, res) {
  User.find({
    where : {
      reset_password_token : req.body.token
    }
    }).then(function (user) {
    if (!user) {
      //ERROR with finding user
      res.redirect('/forgot-password');

    } else {
      user.update({
          password : generateHash(req.body.password)
      }, {
          fields : ["password"]
      });

      res.redirect('/dashboard');

      // NEED TO ADD IN USER ID TO REQUEST
    }
  });
});


module.exports = router;