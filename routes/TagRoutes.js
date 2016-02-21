'use strict';

var express = require('express');
var router = express.Router(),
    Tag = require('../models').Tag,
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

router.post('/tag-sheet', function (req, res){

  const body = req.body;

  console.log("what is body", body);

  TagCalculation.create({
    atm: body.atmPressure,
    built_up_back_pressure: body.backPressureBuiltUp,
    compressibility: body.compressibility,
    constant_super_imposed_pressure: body.constantSuperimposed,
    design_max_temperature: body.designMaxTemperature,
    design_min_temperature: body.designMinTemperature,
    inlet_loss: body.inletLoss,
    inlet_loss_percentage: body.inletLossPercent,
    mawp: body.mawp,
    molecular_weight: body.molecularWeight,
    operating_pressure: body.operatingPressure,
    operating_temperature: body.operatingTemperature,
    orifice_size: body.OrificeSize,
    overpressure: body.overpressure,
    relief_temperature: body.reliefTemperature,
    required_flow_capacity: body.requiredFlowCapacity,
    rupture_disc_checkbox: body.ruptureDiscCheckbox,
    rupture_disc: body.ruptureDisc,
    set_pressure: body.setPressure,
    specific_gravity: body.specificGravity,
    specific_heat: body.specificHeat,
    variable_super_imposed_pressure: body.varSuperimposed,
    viscosity: body.viscosity
    // media_id: media
    // media_type_id: mediaType
    // sizing_basis_id:
    // viscosity_unit_id
    // temperature_unit_id:
    // required_flow_capacity_unit_id:
    // pressure_unit_id:
    // asme_sizing_id:
    // code_type_id:


  })
    .then(function (tagSheet) {
      res.json(tagSheet)
    });
})

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