(function () {
    "use strict";

    const express = require('express');
    const router = express.Router();
    const models = require('../models');
    const Tag = models.Tag;
    const TagCalculation = models.TagCalculation;
    const schema = require('validate');
    const newTag = schema({
        name: {
            type: 'string',
            required: true,
            message: 'Name is required'
        },
        quantity: {
            type: 'number',
            required: true,
            message: 'Quantity is required'
        },
        pid: {
            type: 'string',
            required: true,
            message: 'pid is required'
        },
        service: {
            type: 'string',
            required: true,
            message: 'Service is required'
        },
        line_number: {
            type: 'number',
            required: true,
            message: 'LIne Number is required'
        },
        model_number: {
            type: 'number',
            required: true,
            message: 'Model number is required'
        },
        need_by_date: {
            type: 'number',
            required: true,
            message: 'Need by date is required'
        },
        ship_date: {
            type: 'number',
            required: true,
            message: 'Ship Date is required'
        },
        tracking_number: {
            type: 'number',
            required: true,
            message: 'Tracking Number is required'
        },
        project_id: {
            type: 'number',
            required: true,
            message: 'Project Id is required'
        },
        project_status: {
            type: 'string',
            required: true,
            message: 'Project Status is required'
        },
        device: {
            type: 'string',
            required: true,
            message: 'Device is required'
        }
    });

    function findAllTags(projectId) {
      return Tag.findAll({
            where:{
              project_id: projectId
            }
        });
    }

    function findTag(tagId) {
        return Tag.findOne({
            where:{
                project_id: tagId
            }
        });
    }

    function createtag(tagData) {
        return Tag.create({
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
        });
    }

    router.get('/', function (req, res) {
      const projectId = req.query.projectId;

        findAllTags(projectId)
          .then(function (tags){
            res.json(tags);
          })
          .catch({code: 401}, function (error) {
              console.error("401 error", error);
              res.json({error});
          })
          .catch(function (error) {
                console.error("Catch all error", error);
                res.json({error});
          });
    });

    router.get('/:id', function (req, res){
      const tagId = req.params.tagId;

      findTag(tagId)
          .then(function (tag){
            res.json(tag);
          });
    });

    function ensureAllTagInputsExist(tagData) {
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
    }

    router.post('/', function (req, res) {
      var tagData = req.body;

      createtag(tagData)
        .then(function (tag) {
          res.json(tag);
        })
        .catch(function (error) {
            res.json({error});
        });
    });

    router.post('/tag-sheet', function (req, res){

      const body = req.body;

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
        // media_id: body.media
        // media_type_id: body.mediaType
        // sizing_basis_id: body.
        // viscosity_unit_id: body.
        // temperature_unit_id: body.
        // required_flow_capacity_unit_id: body.
        // pressure_unit_id:
        // asme_sizing_id:
        // code_type_id:
        // tag_id:

      })
        .then(function (tagSheet) {
          res.json(tagSheet)
        });
    });

    module.exports = router;

}());