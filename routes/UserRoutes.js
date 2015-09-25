'use strict';

var express = require('express');
var router = express.Router();
var State = require('../models').State;
var AccountType = require('../models').AccountType;
var User = require('../models').User;
var bodyParser = require('body-parser');

router.get('/account_types', function (req, res) {
  AccountType.findAll().then(function (accountTypes){
    res.json(accountTypes);
  })
});

router.get('/states', function (req, res) {
  State.findAll().then(function (states){
    res.json(states);
  })
});

router.post('/create_user' , function (req,res){
  User.create({
    username: req.body.newUser.username,
    first_name: req.body.newUser.first_name,
    last_name: req.body.newUser.last_name,
    email: req.body.newUser.email,
    password: req.body.newUser.password,
    city: req.body.newUser.city,
    state: req.body.newUser.state,
    zipcode: req.body.newUser.zipcode,
    country: req.body.newUser.country,
    company: req.body.newUser.company,
    job_title: req.body.newUser.job_title,
    phone_number: req.body.newUser.phone_number,
    user_picture: req.body.newUser.user_picture,
    hidden: true
  }).then(function(){
    res.status(200).jsonp({success:true});
  })
  
});

module.exports = router;