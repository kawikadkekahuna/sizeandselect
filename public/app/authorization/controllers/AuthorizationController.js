angular.module('app')

.controller('AuthorizationController', function($scope, $localStorage, $state, AuthorizationService, SessionService) {

  $scope.login = function(user) {
      AuthorizationService.login(user).success(function (data, status) {
        if(data.statusCode !== 200){
          alert('invalid creds');
          return;
        }
        $localStorage.token = data.sizeselect_access_token;
        alert('token set');
        $state.go('dashboard');  

    })
      .error(function (data) {
        $state.go('login'); 
    });
  }


});