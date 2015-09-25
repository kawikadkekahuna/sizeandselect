angular.module('app')

.controller('RegistrationController', function($scope, DropdownService, RegexService, RegistrationService) {

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
    user.hidden = RegistrationService.getUserDefault().hidden;

    RegistrationService.createUser(user).then(function(res){
      console.log('res',res)
    });
  };

});