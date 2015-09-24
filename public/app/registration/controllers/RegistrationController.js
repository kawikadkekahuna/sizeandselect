angular.module('app')

.controller('RegistrationController', function($scope, DropdownService) {

  DropdownService.getAccountTypes().then(function(accountTypes) {
    $scope.accountTypes = accountTypes.data;
    console.log($scope.accountTypes);
  });

  DropdownService.getStates().then(function(states) {
    $scope.states = states.data;
    console.log($scope.states);
  });

  $scope.createUser = function(user) {
    console.log(user);
  };

});