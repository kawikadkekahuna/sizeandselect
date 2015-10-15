'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function (req, res){

  req.logout();
  res.status(200).send({message:'logout success', status:200});

});

module.exports = router;