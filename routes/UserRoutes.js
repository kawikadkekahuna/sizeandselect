'use strict';

var express = require('express');
var router = express.Router();
var states = require('../models').State
var bodyParser = require('body-parser');


router.get('/states', function(req, res) {
  console.log('@@@@@@@@@@@@@@@@@@@@@');
  state.findAll().then(function (states){
    console.log(states);
  })
});

module.exports = router;