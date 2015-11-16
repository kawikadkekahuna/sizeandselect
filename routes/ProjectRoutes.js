'use strict'

var express = require('express');
var router = express.Router();
var Project = require('../models').Project;

router.post('/create', function (req, res){
  try{
    Project.create({
      project_name: req.body.name,
      company_name: req.body.company,
      location: req.body.location

    }).then(function (project){
      console.log('project', project);
      res.json(project);
    })
  }catch(err){
    console.log('Oops.  Something went wrong with creating projects');
    throw new err;
  }
});

module.exports = router;