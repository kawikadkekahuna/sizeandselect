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

    var V = tagInputData.requiredFlowCapacity,
      M = tagInputData.molecularWeight,
      Temperature = 100,
      T = calculateReliefTemp(Temperature),
      Z = tagInputData.compressibility || 1.0,
      K = 0.865, //Always the default,
      k = specificHeat,
      C = 315, //I HAVE NO IDEA WHAT THIS IS
      W = tagInputData.requiredFlowCapacity
      setPressure = tagInputData.setPressure,
      inletLossPressure = tagInputData.inletLoss,
      allowableOverPressure = tagInputData.allowableOverPressure,
      P1 = calculateP1V(setPressure, inletLossPressure, allowableOverPressure),
      A = calculateRequiredAreaWeight(V, M, T, Z, C, K P1),
      // tagInputData.orificeSize = calculateRequiredAreaWeight(V, M, T, Z, C, K P1),
      backPressureBuiltUp = tagInputData.backPressureBuiltUp;



    // validate the information
    // Run the numbers
    // pass the information to the next service to add to the DB

    return tagInputData;
  };

};

function calculateReliefTemp(Temperature) {
  return Temperature + 460;
}

function calculateP1V(setPressure, inletLossPressure, allowableOverPressure) {
  return (setPressure - inletLossPressure) + allowableOverPressure + 14.7;
}

function calculateRequiredAreaWeight(V, M, T, Z, C, K P1) {
  return (V * (Math.sqrt((M * T * Z)))) / (6.32 * C * K * P1)
}

function calculateRequiredAreaVolume() {
  return (W / (C * K * P1 * Kb * Kc)) * Math.sqrt(((T * Z) / M))
}

function validateAreNumbers(tagInputData) {
  const tagInputs = Object.keys(tagInputData);

    return tagInputs.every(function (tagInput) {
        return !isNaN(parseFloat(body[tagInput])) && isFinite(body[tagInput]);
    });
}


