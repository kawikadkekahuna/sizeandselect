'use strict';

var express = require('express');
var router = express.Router();
var State = require('../models').State;
var AccountType = require('../models').AccountType;
var MediaTypes = require('../models').MediaType;
var SizingToggle = require('../models').ToggleApiAsme;
var User = require('../models').User;
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

router.get('/_media_types', function (req, res) {
  MediaTypes.findAll().then(function (mediaTypes){
    res.json(mediaTypes);
  })
});

router.get('/_api_apme_toggle_sizes', function (req, res) {
  SizingToggle.findAll().then(function (sizingToggles){
    res.json(sizingToggles);
  })
});


module.exports = router;