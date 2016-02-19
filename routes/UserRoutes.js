'use strict';

var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var User = require('../models').User;

router.get('/dashboard', function (req, res){
  res.send({headers: req.headers});
});

router.get('/:id', function (req, res) {
	var userId = req.params.id;
	console.log('userId',userId);
	User.findOne({where: {id: userId}}).then(function (user){
		res.json(user);
	});
});
module.exports = router;