'use strict';

var express = require('express');
var router = express.Router();
var PressureUnit = require('../models').PressureUnit,
    TemperatureUnit = require('../models').TemperatureUnit,
    ViscosityUnit = require('../models').ViscosityUnit,
    FlowCapacityUnit = require('../models').FlowCapacityUnit,
    SizingBasis = require('../models').SizingBasis,
    ToggleApiAsme = require('../models').ToggleApiAsme,
    InletFlange = require('../models').InletFlange,
    FlangeFacing = require('../models').FlangeFacing,
    TrimType = require('../models').TrimType,
    SeatType = require('../models').SeatType,
    MaterialVariable = require('../models').MaterialVariable,
    Media = require('../models').Media,
    MediaType = require('../models').MediaType,
    CapType = require('../models').CapType;

router.get('/all', function (req,res){
  var pressure,
      temperature,
      viscosity,
      flowCapacity,
      sizingBasis,
      toggleApiAsme,
      inletFlange,
      flangeFacing,
      trimType,
      seatType,
      materialVariable,
      media,
      mediaType,
      capType;

  PressureUnit.findAll({}).then(function (unit){
    pressure = unit;
  });

  TemperatureUnit.findAll({}).then(function (unit){
    temperature = unit;
  });

  ViscosityUnit.findAll({}).then(function (unit){
    viscosity = unit;
  });

  FlowCapacityUnit.findAll({}).then(function (unit){
    flowCapacity = unit;
  });

  SizingBasis.findAll({}).then(function (unit){
    sizingBasis = unit;
  });

  ToggleApiAsme.findAll({}).then(function (unit){
    toggleApiAsme = unit;
  });

  InletFlange.findAll({}).then(function (unit){
    inletFlange = unit;
  });

  FlangeFacing.findAll({}).then(function (unit){
    flangeFacing = unit;
  });

  TrimType.findAll({}).then(function (unit){
    trimType = unit;
  });

  SeatType.findAll({}).then(function (unit){
    seatType = unit;
  });

  MaterialVariable.findAll({}).then(function (unit){
    materialVariable = unit;
  });

  Media.findAll({}).then(function (unit){
    media = unit;
  });

  MediaType.findAll({}).then(function (unit){
    mediaType = unit;
  });

  CapType.findAll({}).then(function (unit){
    capType = unit;
    var units = {
      PRESSURE: pressure,
      TEMPERATURE: temperature,
      VISCOSITY: viscosity,
      FLOW_CAPACITY: flowCapacity,
      SIZING_BASIS: sizingBasis,
      TOGGLE_API_AS_ME: toggleApiAsme,
      INLET_FLANGE: inletFlange,
      FLANGE_FACING: flangeFacing,
      TRIM_TYPE: trimType,
      SEAT_TYPE: seatType,
      MATERIAL_VARIABLE: materialVariable,
      MEDIA: media,
      MEDIA_TYPE: mediaType,
      CAP_TYPE: capType
    };
    res.json(units);
  });
});

router.get('/pressure', function (req,res){
  PressureUnit.findAll({}).then(function (unit){
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