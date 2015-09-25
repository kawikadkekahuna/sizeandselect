angular.module('app')
  .service('DropdownService',['$http',DropdownService])

function DropdownService ($http) {

  this.getAccountTypes = function() {
    return $http.get(SERVER+ '/api/user_routes/account_types');
  };

  this.getStates = function()  {
    return $http.get(SERVER + '/api/user_routes/states');
  };
}