'use strict';

var express = require('express');
var router = express.Router();
var Tag = require('../models').Tag;


router.post('/create', function (req, res) {
  var tagData = req.body.tagData;

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
      tracking_number: tagData.tracking_number 
    }).then(function (tag){
      res.json(tag);
    });
  }catch(err){
    res.json({error: err});
  }



});

module.exports = router;