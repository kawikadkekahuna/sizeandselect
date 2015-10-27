angular.module('app')

.controller('AuthorizationController', function($scope, $localStorage, $state, AuthorizationService, SessionService) {

  $scope.login = function(user) {
      AuthorizationService.login(user).success(function (data, status) {
      $localStorage.token = data.sizeselect_access_token;
        // $state.go('about-us');  
    })
      .error(function (data) {
        $state.go('login'); 
    });
  }


});