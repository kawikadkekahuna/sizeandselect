'use strict';

var express = require('express');
var router = express.Router();
const Promise = require('bluebird');
var PressureUnit = require('../models').PressureUnit,
    TemperatureUnit = require('../models').TemperatureUnit,
    ViscosityUnit = require('../models').ViscosityUnit,
    FlowCapacityUnit = require('../models').FlowCapacityUnit,
    SizingBasis = require('../models').SizingBasis,
    AsmeSizing = require('../models').AsmeSizing,
    InletFlange = require('../models').InletFlange,
    FlangeFacing = require('../models').FlangeFacing,
    TrimType = require('../models').TrimType,
    SeatType = require('../models').SeatType,
    MaterialVariable = require('../models').MaterialVariable,
    Media = require('../models').Media,
    MediaType = require('../models').MediaType,
    CapType = require('../models').CapType;


    function getPressureUnits() {
        return PressureUnit.findAll();
    }

    function getTemperatureUnits() {
        return TemperatureUnit.findAll();
    }

    function getViscosityUnits() {
        return ViscosityUnit.findAll();
    }

    function getFlowCapacityUnits() {
        return FlowCapacityUnit.findAll();
    }

    function getSizingBasisUnits() {
        return SizingBasis.findAll();
    }


    function getAsmeSizings() {
        return AsmeSizing.findAll();
    }

    function getInletFlanges() {
        return InletFlange.findAll();
    }

    function getFlangeFacings() {
        return FlangeFacing.findAll();
    }

    function getTrimTypes() {
        return TrimType.findAll();
    }

    function getSeatTypes() {
        return SeatType.findAll();
    }

    function getMaterialVariables() {
        return MaterialVariable.findAll();
    }

    function getMedias() {
        return Media.findAll();
    }

    function getMediaTypes() {
        return MediaType.findAll();
    }

    function getCapTypes() {
        return CapType.findAll();
    }



    function getAllDropdownValues() {
        return Promise.join(
            getPressureUnits(),
            getTemperatureUnits(),
            getViscosityUnits(),
            getFlowCapacityUnits(),
            getSizingBasisUnits(),
            getAsmeSizings(),
            getInletFlanges(),
            getFlangeFacings(),
            getTrimTypes(),
            getSeatTypes(),
            getMaterialVariables(),
            getMedias(),
            getMediaTypes(),
            getCapTypes(),
            function (
                pressure,
                temp,
                viscosity,
                flowCapacity,
                sizingBasis,
                asmeSizings,
                inletFlanges,
                flangeFacings,
                trimTypes,
                seatTypes,
                materialVariables,
                medias,
                mediaTypes,
                capTypes) {
                return {
                    pressure,
                    temp,
                    viscosity,
                    flowCapacity,
                    sizingBasis,
                    asmeSizings,
                    inletFlanges,
                    flangeFacings,
                    trimTypes,
                    seatTypes,
                    materialVariables,
                    medias,
                    mediaTypes,
                    capTypes
                };
            }
        );
    }


router.get('/all', function (req,res) {
    console.log("come and get some dropdown");
    getAllDropdownValues()
        .then(function (dropdownValues) {
            res.json({
                PRESSURE: dropdownValues.pressure,
                TEMPERATURE: dropdownValues.temp,
                VISCOSITY: dropdownValues.viscosity,
                FLOW_CAPACITY: dropdownValues.flowCapacity,
                SIZING_BASIS: dropdownValues.sizingBasis,
                TOGGLE_API_AS_ME: dropdownValues.asmeSizings,
                INLET_FLANGE: dropdownValues.inletFlanges,
                FLANGE_FACING: dropdownValues.flangeFacings,
                TRIM_TYPE: dropdownValues.trimTypes,
                SEAT_TYPE: dropdownValues.seatTypes,
                MATERIAL_VARIABLE: dropdownValues.materialVariables,
                MEDIA: dropdownValues.medias,
                MEDIA_TYPE: dropdownValues.mediaTypes,
                CAP_TYPE: dropdownValues.capTypes
            });
        });
});

router.get('/pressure', function (req,res){
    getPressureUnits()
        .then(function (unit){
            res.json(unit);
        });
});

router.get('/temperature', function (req,res){
  TemperatureUnit.findAll({}).then(function (unit){
    res.json(unit);
  });
});

router.get('/viscosity', function (req,res){
  ViscosityUnit.findAll({}).then(function (unit){
    res.json(unit);
  });
});

router.get('/flow-capacity', function (req,res){
  FlowCapacityUnit.findAll({}).then(function (unit){
    res.json(unit);
  });
});

router.get('/sizing-basis', function (req,res){
  SizingBasis.findAll({}).then(function (unit){
    res.json(unit);
  });
});

router.get('/toggle-apiasme', function (req,res){
  ToggleApiAsme.findAll({}).then(function (unit){
    res.json(unit);
  });
});

router.get('/inlet-flange', function (req,res){
  InletFlange.findAll({}).then(function (unit){
    res.json(unit);
  });
});

router.get('/flange-facing', function (req,res){
  FlangeFacing.findAll({}).then(function (unit){
    res.json(unit);
  });
});

router.get('/trim-type', function (req,res){
  TrimType.findAll({}).then(function (unit){
    res.json(unit);
  });
});

router.get('/seat-type', function (req,res){
  SeatType.findAll({}).then(function (unit){
    res.json(unit);
  });
});

router.get('/material-variable', function (req,res){
  MaterialVariable.findAll({}).then(function (unit){
    res.json(unit);
  });
});

router.get('/cap-type', function (req,res){
  CapType.findAll({}).then(function (unit){
    res.json(unit);
  });
});

module.exports = router;