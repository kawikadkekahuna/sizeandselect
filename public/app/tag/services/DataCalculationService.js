angular.module('app')

.service('DataCalculationService',['$http','$state', DataCalculationService])
  var reliefTempBase = 460,
      p1Base = 14.7,
      gasConstant = 315,
      interalGlobalTemp = 560,
      interalGlobalTempUnit = "F";

function DataCalculationService () {

  this.processDataInputs = function (tagInputData) {
    console.log("what is tagInputData", tagInputData)
    return tagInputData;
  };



  this.calculateReliefTemp = function (formInput) {
    console.log("formInput", formInput);
    var reliefTemp = 100, //input value for relief Temp field on tag
      reliefTempunit = "F";

    interalGlobalTemp = reliefTempunit;
    interalGlobalTemp = reliefTemp + reliefTempBase;

  };

  this.calculateP1V = function () {

    var reliefTemp  = calculateReliefTemp(model.inputTemp)

    // var setPressure = 0, //set pressure input
    //     inletPressureLoss = 0, //inlet pressure loss input
    //     allowableOverPressure = 0, //allowable over pressure input
    //     p1Value = (setPressure - inletPressureLoss) + ( allowableOverPressure + p1Base);

        // return p1Value + reliefTemp;
        return p1Base + reliefTemp;
  }



};