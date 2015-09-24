angular.module('app')

.controller('RegistrationController', function ($scope) {

  $scope.createUser = function (user) {
    console.log(user);
  };

});
