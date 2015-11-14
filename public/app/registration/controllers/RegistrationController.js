angular.module('app')

.controller('RegistrationController', function($scope, $state, DropdownService, RegexService, AuthorizationService, $localStorage) {

  DropdownService.getAccountTypes().then(function(accountTypes) {
    $scope.accountTypes = accountTypes.data;
  });

  $scope.validations = {
    email:RegexService.getEmail(),
    phoneNumber: RegexService.getPhoneNumber(),
  }

  $scope.createUser = function(user) {
    AuthorizationService.createUser(user).then(function (user){
      $localStorage.token = user.data.sizeselect_access_token;
      $state.go('dashboard');
    }); 
  };


});