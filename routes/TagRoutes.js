'use strict';

var express = require('express');
var router = express.Router();
var Tag = require('../models').Tag;


router.post('/create', function (req, res) {
  var tagData = req.body.tagData.tagData;
  try{
    Tag.create({
      name: tagData.name ,
      quantity: tagData.quantiy ,
      pid: tagData.pid ,
      service: tagData.service ,
      line_number: tagData.line_number ,
      model_number: tagData.model_number ,
      need_by_date: tagData.need_by_date ,
      ship_date: tagData.ship_date,
      tracking_number: tagData.tracking_number,
      project_id: tagData.projectId 
    }).then(function (tag){
      res.json(tag);
    });
  }catch(err){
    res.json({error: err});
  }
});

router.get('/tags', function (req,res){
  var projectId = req.query.projectId;
  Tag.findAll({where:{
    project_id: projectId
  }}).then(function (project){
    res.json(project);
  });
});

router.get('/id', function (req,res){
  var tagId = req.query.tagId;
  Tag.findOne({where:{
    project_id: tagId
  }}).then(function (project){
    res.json(project);
  });
});

module.exports = router;