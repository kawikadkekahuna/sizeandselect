angular.module('app')
  .service('DropdownService',['$http',DropdownService])

function DropdownService ($http) {

  this.getAccountTypes = function() {
    return $http.get(SERVER+ '/api/defaults/_account_types');
  };

  this.getStates = function()  {
    return $http.get(SERVER + '/api/defaults/_states');
  };

  this.getApiAsmeToggleSizes = function () {
    return $http.get(SERVER + '/api/defaults/_api_apme_toggle_sizes');
  }
}