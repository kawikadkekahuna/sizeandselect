'use strict'

var express = require('express');
var router = express.Router();
var Project = require('../models').Project;
var jwt = require('jsonwebtoken');

router.get('/projects', verify, function (req,res){
  var userId = req.query.user_id;
  Project.findAll({where:{
    user_id: userId
  }}).then(function (projects){
    res.json(projects);
  });
});

router.get('/id', verify, function (req,res){
  var projectId = req.query.projectId;
  Project.findOne({where:{
    id: projectId
  }}).then(function (project){
    res.json(project);
  });
});

router.post('/create', verify, function (req, res){
  var load = req.body;
  for(var key in req.body){
    if(req.body.hasOwnProperty(key)){
      if(key !== 'name' &&
        key !== 'company' &&
        key !== 'location' &&
        key !== 'user_id' &&
        key !== 'status'){
        res.json({error: 'Invalid request', message: 'Request must contain fields [name, company, location, status, user_id]'})
      };
    };
  };
  try{
    Project.create({
      project_name: req.body.name,
      company_name: req.body.company,
      location: req.body.location,
      status:'open',
      user_id: req.body.user_id
    }).then(function (project){
      res.json(project);
    });
  }catch(err){
    res.json({error: err});
  };
});

function verify (req, res, next) {
  jwt.verify(req.headers.authorization, 'sushisecret', function (err, decoded){
    if(decoded){
      next();
    }else{
      res.json({
        error:'Unauthorized', 
        status: 401, 
        message:'Invalid or expired access token.'
      });
    };
  });
};
module.exports = router;