'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models').User;
var bcrypt = require('bcrypt');

function generateHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(11));
}

router.get('/:token', function (req, res) {
  console.log("token we are looking for", req.params.token);
  User.find({
    where : {
        reset_password_token: req.params.token,
        $and : {
            reset_password_expires : { $gt: Date.now() }
        }
    }
  }).then(function (user) {
    console.log("user in the system", user);

    if (!user) {
        console.log("Password reset token is invalid or has expired.");
        return res.redirect('/forgot-password');
    }

    // Send the token to the form as hidden input and validate on the PUT request

    res.redirect('/reset-password');

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