angular.module('app')

.controller('NavigationController', function($scope, AuthorizationService){
  $scope.logout = function (){
    console.log('logging out');
    AuthorizationService.logout();
  };
  $scope.isLoggedIn = AuthorizationService.isAuthenticated();


});