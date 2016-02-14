angular.module('app')

.service('AuthorizationService',['$http', '$localStorage', '$state', AuthorizationService]);

function AuthorizationService ($http, $localStorage, $state, $sessionStorage) {
  this.login = function (user) { 
    return $http.post(SERVER + '/api/auth/login', user);
  };

  this.logout = function () {
    return $http.get(SERVER + '/api/auth/logout').then(function (res){
      delete($localStorage.token);
      delete($localStorage.userId);
      $localStorage.authenticated = false;
      $state.go('login');
    });

  };

  this.createUser = function (user) {
    return $http.post(SERVER + '/api/auth/register', user);
  };

  this.resetPassword = function (user){
    return $http.post(SERVER + '/api/auth/reset_password')
  };

  this.isAuthenticated = function (){
    if($localStorage.token){
      var authenticated;
      $http.get(SERVER +'/api/auth/isAuthenticated', $localStorage.token).then(function (res){
        if(res.data.status === 200){
          authenticated = true
        }else{
          authenticated = false
        };
        return authenticated;
      });
    };
  };
}