'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models').User;
var bcrypt = require('bcrypt');

function generateHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(11));
}


router.get('/:token', function (req, res) {
  User.find({
    where : {
        reset_password_token: req.params.token,
        $and : {
            reset_password_expires : { $gt: Date.now() }
        }
    }
  }).then(function (user) {

    if (!user) {
        console.log("Password reset token is invalid or has expired.");
        return res.redirect('/forgot-password');
    }

    //NEED TO PASS IN USERID SO WHEN THEY RESET THEIR PW SO WE KNOW WHICH USER

    res.redirect('/reset-password');

  });
});

router.put('/', function (req, res) {

        //user id needs to be passed in on the request

  User.find({
    where : {
      id : req.body.id
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