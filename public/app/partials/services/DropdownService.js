angular.module('app')
  .service('DropdownService',['$http',DropdownService])

function DropdownService ($http) {

  this.getAccountTypes = function() {
    return $http.get(SERVER+ '/api/defaults/_account_types');
  };

  this.getStates = function()  {
    return $http.get(SERVER + '/api/defaults/_states');
  };

  this.getMediaTypes = function () {
    return $http.get(SERVER + '/api/defaults/_media_types');
  }

  this.getApiAsmeToggleSizes = function () {
    return $http.get(SERVER + '/api/defaults/_api_apme_toggle_sizes');
  }

  this.getPressureUnits = function() {
    return $http.get(SERVER+ '/api/unitAnalytics/pressure');
  };

  this.getTemperatureUnits = function() {
    return $http.get(SERVER+ '/api/unitAnalytics/temperature');
  };

  this.getViscosityUnits = function() {
    return $http.get(SERVER+ '/api/unitAnalytics/viscosity');
  };

  this.getFlowCapacityUnits = function() {
    return $http.get(SERVER+ '/api/unitAnalytics/flow-capacity');
  };

  this.getSizingBasisUnits = function() {
    return $http.get(SERVER+ '/api/unitAnalytics/sizing-basis');
  };
}