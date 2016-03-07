(function () {
    "use strict";

    const Promise = require('bluebird');
    const models = require('../../models');
    const PressureUnit = models.PressureUnit;
    const TemperatureUnit = models.TemperatureUnit;
    const ViscosityUnit = models.ViscosityUnit;
    const FlowCapacityUnit = models.FlowCapacityUnit;
    const SizingBasis = models.SizingBasis;
    const AsmeSizing = models.AsmeSizing;
    const CodeType = models.CodeType;
    const InletFlange = models.InletFlange;
    const FlangeFacing = models.FlangeFacing;
    const TrimType = models.TrimType;
    const SeatType = models.SeatType;
    const MaterialVariable = models.MaterialVariable;
    const MediaType = models.MediaType;
    const CapType = models.CapType;

    const getPressureUnits = function () {
        return PressureUnit.findAll();
    };

    const getTemperatureUnits = function () {
        return TemperatureUnit.findAll();
    };

    const getViscosityUnits = function () {
        return ViscosityUnit.findAll();
    };

    const getFlowCapacityUnits = function () {
        return FlowCapacityUnit.findAll();
    };

    const getSizingBasisUnits = function () {
        return SizingBasis.findAll();
    };

    const getAsmeSizings = function () {
        return AsmeSizing.findAll();
    };

    const getCodeType = function () {
        return CodeType.findAll();
    };

    const getInletFlanges = function () {
        return InletFlange.findAll();
    };

    const getFlangeFacings = function () {
        return FlangeFacing.findAll();
    };

    const getTrimTypes = function () {
        return TrimType.findAll();
    };

    const getSeatTypes = function () {
        return SeatType.findAll();
    };

    const getMaterialVariables = function () {
        return MaterialVariable.findAll();
    };

    const getMediaTypes = function () {
        return MediaType.findAll();
    };

    const getCapTypes = function () {
        return CapType.findAll();
    };

    const getAllDropdownValues = function () {
        return Promise.join(
            getPressureUnits(),
            getTemperatureUnits(),
            getViscosityUnits(),
            getFlowCapacityUnits(),
            getSizingBasisUnits(),
            getAsmeSizings(),
            getCodeType(),
            getInletFlanges(),
            getFlangeFacings(),
            getTrimTypes(),
            getSeatTypes(),
            getMaterialVariables(),
            getMediaTypes(),
            getCapTypes(),
            function (
                pressure,
                temp,
                viscosity,
                flowCapacity,
                sizingBasis,
                asmeSizings,
                codeTypes,
                inletFlanges,
                flangeFacings,
                trimTypes,
                seatTypes,
                materialVariables,
                mediaTypes,
                capTypes
            ) {
                return {
                    pressure,
                    temp,
                    viscosity,
                    flowCapacity,
                    sizingBasis,
                    asmeSizings,
                    codeTypes,
                    inletFlanges,
                    flangeFacings,
                    trimTypes,
                    seatTypes,
                    materialVariables,
                    mediaTypes,
                    capTypes
                };
            }
        );
    };

    module.exports = {
        getPressureUnits,
        getTemperatureUnits,
        getViscosityUnits,
        getFlowCapacityUnits,
        getSizingBasisUnits,
        getAsmeSizings,
        getCodeType,
        getInletFlanges,
        getFlangeFacings,
        getTrimTypes,
        getSeatTypes,
        getMaterialVariables,
        getMediaTypes,
        getCapTypes,
        getAllDropdownValues
    };

}());