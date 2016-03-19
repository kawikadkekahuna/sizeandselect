angular.module('app')

.controller('UserController', function ($scope, AuthorizationService){

  $scope.logout = function (){
    AuthorizationService.logout();
  };

});