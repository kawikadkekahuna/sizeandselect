'use strict';

var express = require('express');
var router = express.Router();
var Project = require('../models').Project;
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');

router.post('/create',function (req,res) {

  Project.create({
    project_name: req.body.project_name,
    company_name: req.body.company_name,
    status: req.body.status
  }).then(function (project){
      res.jsonp(project);
  });

});

module.exports = router;