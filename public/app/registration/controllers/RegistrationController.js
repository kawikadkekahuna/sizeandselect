angular.module('app')

.controller('RegistrationController', function($scope, $state, DropdownService, RegexService, AuthorizationService, $localStorage) {

  DropdownService.getAccountTypes().then(function(accountTypes) {
    $scope.accountTypes = accountTypes.data;
  });

  DropdownService.getStates().then(function(states) {
    $scope.states = states.data;
  });

  $scope.validations = {
    email:RegexService.getEmail(),
    phoneNumber: RegexService.getPhoneNumber(),
    zipcode: RegexService.getZipcode()
  }

  $scope.createUser = function(user) {
    AuthorizationService.createUser(user).then(function (user){
      $localStorage.token = user.data.sizeselect_access_token;
      $state.go('dashboard');
    }); 
  };


});