'use strict';

var express = require('express');
var router = express.Router();
var Tag = require('../models').Tag,
    TagCalculation = require('../models').TagCalculation,
    jwt = require('jsonwebtoken');

router.post('/create', verify, function (req, res) {
  var tagData = req.body;
  console.log('tagData',tagData.pid);
  for(var key in tagData){
    if(tagData.hasOwnProperty(key)){
      if(key !== 'name' &&
        key !== 'quantity' &&
        key !== 'pid' &&
        key !== 'service' &&
        key !== 'line_number' &&
        key !== 'model_number' &&
        key !== 'need_by_date' &&
        key !== 'ship_date' &&
        key !== 'tracking_number' &&
        key !== 'project_id'){
        res.json({error: 'Invalid request', message: 'Request must contain fields [name, quantity, pid, service, line_number, model_number, need_by_date, ship_date, tracking_number, projectId]'})
      };
    };
  };
  try{
    Tag.create({
      name: tagData.name ,
      quantity: tagData.quantity ,
      pid: tagData.pid,
      service: tagData.service ,
      line_number: tagData.line_number ,
      model_number: tagData.model_number ,
      need_by_date: tagData.need_by_date ,
      ship_date: tagData.ship_date,
      tracking_number: tagData.tracking_number,
      project_id: tagData.project_id,
      project_status: 'open',
      device: 'Relief Valve'
    }).then(function (tag){
      res.json(tag);
    });
  }catch(err){
    res.json({error: err});
  }
});

router.get('/tags', verify, function (req,res){
  var projectId = req.query.projectId;
  Tag.findAll({where:{
    project_id: projectId
  }}).then(function (project){
    res.json(project);
  });
});

router.get('/id', verify, function (req,res){
  var tagId = req.query.tagId;
  Tag.findOne({where:{
    project_id: tagId
  }}).then(function (project){
    res.json(project);
  });
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