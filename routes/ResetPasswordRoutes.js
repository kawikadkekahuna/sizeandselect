'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models').User;
var bcrypt = require('bcrypt');

function generateHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(11));
}

router.get('/', function (req, res) {
  User.find({
    where : {
        reset_password_token: req.query.token,
        reset_password_expires: { $gt: Date.now() }
    }
  }).then(function (user) {
    if (!user) {
      res.sendStatus(404);
    } else {
      res.json({
        status: 200,
        token: user.reset_password_token
      });
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
      res.sendStatus(404);
    } else {
      user.update({
          password : generateHash(req.body.password)
      }, {
          fields : ["password"]
      });
      res.sendStatus(204);
    }
  });
});


module.exports = router;