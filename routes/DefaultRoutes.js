'use strict';

var express = require('express');
var router = express.Router();
var State = require('../models').State;
var AccountType = require('../models').AccountType;
var User = require('../models').User;
var ValveType = require('../models').ValveType;
var bodyParser = require('body-parser');
var DEFAULT_HIDDEN = true;

router.get('/_account_types', function (req, res) {
  AccountType.findAll().then(function (accountTypes){
    res.json(accountTypes);
  })
});

router.get('/_states', function (req, res) {
  State.findAll().then(function (states){
    res.json(states);
  })
});

router.get('/_valve_types',function (req, res) {
  ValveType.findAll().then(function (types){
    res.status(200).send(types);
  });

});


module.exports = router;