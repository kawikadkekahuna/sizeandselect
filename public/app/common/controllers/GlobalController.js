angular.module('app')

.controller('GlobalController', function ($scope, $state, AuthorizationService, $localStorage, AUTH_EVENTS){
  $scope.token = $localStorage.token;

  $scope.logout = function(user){
    AuthorizationService.logout(user).then(function () {
      delete($localStorage.token);
      $state.go('login')
    });
  };

});