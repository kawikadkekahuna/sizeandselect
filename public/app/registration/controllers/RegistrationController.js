angular.module('app')

.controller('RegistrationController', function($scope, $state, DropdownService, RegexService, RegistrationService) {

  DropdownService.getAccountTypes().then(function(accountTypes) {
    $scope.accountTypes = accountTypes.data;
  });

  $scope.validations = {
    email:RegexService.getEmail(),
    phoneNumber: RegexService.getPhoneNumber(),
  }

  $scope.createUser = function(user) {
    RegistrationService.createUser(user).then(function(res){
      alert('user created');
      $state.go('login');
    });
  };


});