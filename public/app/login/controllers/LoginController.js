angular.module('app')

.controller('LoginController', function($scope, LoginService) {

  $scope.login = function(user) {
    console.log('logging in user');
    LoginService.login(user).then(function() {

    });
  }

});