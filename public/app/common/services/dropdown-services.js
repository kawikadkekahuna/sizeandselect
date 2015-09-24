angular.module('app')
  .service('DropdownService',['$http',DropdownService])

function DropdownService ($http) {
  this.getAccountTypes = function() {
    return[{
      type: 'Engineer'
    },
    {
      type: 'Representative'
    },
    {
      type: 'Manufacture'
    }]
  };

  this.getStates = function()  {
    console.log($http);
    return $http.get(SERVER + '/api/states');
  };
}