angular.module('app')

.controller('RegistrationController', function ($scope) {
  console.log('Linked Registration Controller');  

  $scope.createUser = function (user) {
    console.log('user',user);
  };

});
