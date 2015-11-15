'use strict';

var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')

router.get('/dashboard', function (req, res) {
  res.send({headers: req.headers});
});

module.exports = router;