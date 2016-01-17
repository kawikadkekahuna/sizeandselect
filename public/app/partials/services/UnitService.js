angular.module('app')
  .service('UnitService',['$http',UnitService])

function UnitService ($http) {

  this.pressureUnit = function() {
    return $http.get(SERVER+ '/api/unitAnalytics/pressure');
  };

}