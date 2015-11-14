angular.module('app')

.controller('AuthorizationController', function($scope, $state, $localStorage, $state, AuthorizationService, SessionService) {

  $scope.login = function(user) {
    AuthorizationService.login(user).success(function (data, status) {
      console.log('data', data);
      if(data.statusCode !== 200){
        return;
      };
      $localStorage.token = data.sizeselect_access_token;
      $state.go('dashboard');  
    })
    .error(function (data) {
      $state.go('login'); 
    });
  }

});