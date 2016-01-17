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

  CapType.findAll({}).then(function (unit){
    capType = unit;
    var units = {
      pressure: pressure,
      temperature: temperature,
      viscosity: viscosity,
      flowCapacity: flowCapacity,
      sizingBasis: sizingBasis,
      toggleApiAsme: toggleApiAsme,
      inletFlange: inletFlange,
      flangeFacing: flangeFacing,
      trimType: trimType,
      seatType: seatType,
      materialVariable: materialVariable,
      capType: capType
    };
    console.log('units', units);
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