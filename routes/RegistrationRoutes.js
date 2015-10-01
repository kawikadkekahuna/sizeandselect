'use strict';

var express = require('express');
var router = express.Router();
var State = require('../models').State;
var AccountType = require('../models').AccountType;
var User = require('../models').User;
var bodyParser = require('body-parser');
var DEFAULT_HIDDEN = true;
var bcrypt = require('bcrypt');

function generateHash(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

function createUser(newUser){
  var password = req.body.newUser.password;

  User.create({
    username: req.body.newUser.username,
    first_name: req.body.newUser.first_name,
    last_name: req.body.newUser.last_name,
    email: req.body.newUser.email,
    password: generateHash(password),
    city: req.body.newUser.city,
    state: req.body.newUser.selectedState.name,
    zipcode: req.body.newUser.zipcode,
    company: req.body.newUser.company,
    job_title: req.body.newUser.job_title,
    phone_number: req.body.newUser.phone_number,
    user_picture: req.body.newUser.user_picture,
    hidden: DEFAULT_HIDDEN
  })
}


router.post('/register' , function (req,res){
  User.find({
    where: {email : req.body.newUser.email}
  }).then(function (user){
    if (user) {
      //user exists display error
      //send status code 422




    } else {
      createUser(newUser);

      //at this point the user has been created successfully

      res.status(200).jsonp(user);
    }
  })

});

module.exports = router;