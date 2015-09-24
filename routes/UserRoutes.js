'use strict';

var express = require('express');
var router = express.Router();
var State = require('../models').State;
var AccountType = require('../models').AccountType;
var bodyParser = require('body-parser');

router.get('/account_types', function(req, res) {
  AccountType.findAll().then(function (accountTypes){
    res.json(accountTypes);
  })
});

router.get('/states', function(req, res) {
  State.findAll().then(function (states){
    res.json(states);
  })
});

module.exports = router;