angular.module('app')

.controller('UserController', function ($scope, AuthorizationService){

  $scope.login = function(user) {
    AuthorizationService.login(user).success(function (data, status) {
      if(data.statusCode !== 200){
        return;
      };
      $localStorage.userId = data.id;
      $localStorage.token = data.sizeselect_access_token;
      $state.go('dashboard');
    })
    .error(function (data) {
      $state.go('login');
    });
  };

  $scope.logout = function (){
    AuthorizationService.logout();
  };

});