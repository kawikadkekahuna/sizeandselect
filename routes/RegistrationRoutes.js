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

function createUser(req){
  var password = req.body.newUser.password;

  User.create({
    username: req.body.newUser.username,
    email: req.body.newUser.email,
    password: generateHash(password),

    // account_hidden: DEFAULT_HIDDEN
  })
}


router.post('/register' , function (req,res){
  console.log('username', req.body.newUser.username);
  console.log('email', req.body.newUser.email);
  User.find(
    { where : {
        $or: [
          {
            username : req.body.newUser.username
          },
          {
            email : req.body.newUser.email
          }
        ]
      }
    }
  ).then(function (user){
    if (user) {
      //username or email exists already choose unique
      res.status(422).send('Invalid input fields.  Data already exists in the database');
    } else {
      createUser(req);
      //at this point the user has been created successfully
      //Need to render the post login page (Passport auto logs in user)

      res.status(200).jsonp(req.body.newUser);
    }
  })

});

module.exports = router;