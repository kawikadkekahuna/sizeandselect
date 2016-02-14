angular.module('app')

.controller('NavigationController', function($scope, $localStorage, AuthorizationService){

	$scope.isLoggedIn = $localStorage.authenticated;

  $scope.logout = function (){
    console.log('logging out');
    AuthorizationService.logout();
  };

});