(function () {
    "use strict";

    const express = require('express');
    const router = express.Router();
    const Dropdown = require('./utilities/dropdown.js');

    router.get('/all', function (ignore, res) {
        Dropdown.getAllDropdownValues()
            .then(function (dropdownValues) {
                res.json({
                    PRESSURE: dropdownValues.pressure,
                    TEMPERATURE: dropdownValues.temp,
                    VISCOSITY: dropdownValues.viscosity,
                    FLOW_CAPACITY: dropdownValues.flowCapacity,
                    SIZING_BASIS: dropdownValues.sizingBasis,
                    ASME_SIZING: dropdownValues.asmeSizings,
                    CODE_TYPE: dropdownValues.codeTypes,
                    INLET_FLANGE: dropdownValues.inletFlanges,
                    FLANGE_FACING: dropdownValues.flangeFacings,
                    TRIM_TYPE: dropdownValues.trimTypes,
                    SEAT_TYPE: dropdownValues.seatTypes,
                    MATERIAL_VARIABLE: dropdownValues.materialVariables,
                    MEDIA_TYPE: dropdownValues.mediaTypes,
                    CAP_TYPE: dropdownValues.capTypes
                });
            });
    });

    router.get('/pressure', function (ignore, res) {
        Dropdown.getPressureUnits()
            .then(function (units) {
                res.json(units);
            });
    });

    router.get('/temperature', function (ignore, res) {
        Dropdown.getTemperatureUnits()
            .then(function (units) {
                res.json(units);
            });
    });

    router.get('/viscosity', function (ignore, res) {
        Dropdown.getViscosityUnits()
            .then(function (units) {
                res.json(units);
            });
    });

    router.get('/flow-capacity', function (ignore, res) {
        Dropdown.getFlowCapacityUnits()
            .then(function (units) {
                res.json(units);
            });
    });

    router.get('/sizing-basis', function (ignore, res) {
        Dropdown.getSizingBasisUnits()
            .then(function (units) {
                res.json(units);
            });
    });

    router.get('/toggle-apiasme', function (ignore, res) {
        Dropdown.getAsmeSizings()
            .then(function (asmeSizings) {
                res.json(asmeSizings);
            });
    });

    router.get('/inlet-flange', function (ignore, res) {
        Dropdown.getInletFlanges()
            .then(function (flanges) {
                res.json(flanges);
            });
    });

    router.get('/flange-facing', function (ignore, res) {
        Dropdown.getFlangeFacings()
            .then(function (flangeFacings) {
                res.json(flangeFacings);
            });
    });

    router.get('/trim-type', function (ignore, res) {
        Dropdown.getTrimTypes()
            .then(function (trimTypes) {
                res.json(trimTypes);
            });
    });

    router.get('/seat-type', function (ignore, res) {
        Dropdown.getSeatTypes()
            .then(function (seatTypes) {
                res.json(seatTypes);
            });
    });

    router.get('/material-variable', function (ignore, res) {
        Dropdown.getMaterialVariables()
            .then(function (materialVariables) {
                res.json(materialVariables);
            });
    });

    router.get('/cap-type', function (ignore, res) {
        Dropdown.getCapTypes()
            .then(function (capTypes) {
                res.json(capTypes);
            });
    });

    module.exports = router;
}());