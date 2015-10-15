angular.module('app')

.controller('LoginController', function ($scope, LoginService, $state, $localStorage) {

  $scope.login = function(user) {
    LoginService.login(user).success(function (data, status) {
      console.log('data', data);
      $localStorage.SESSION = {user: data};
      $state.go('dashboard');  
    })
    .error(function (data) {
      $state.go('login'); 
    });
  };

  $scope.logout = function (user){
    LoginService.logout();
  }

});