angular.module('app')

.service('AuthorizationService',['$http', '$localStorage', AuthorizationService]);

function AuthorizationService ($http, $localStorage) {
  this.login = function (user) { 
    return $http.post(SERVER + '/api/auth/login', user);
  };

  this.logout = function () {
    return $http.get(SERVER + '/api/auth/logout');
  };

  this.createUser = function (user) {
    return $http.post(SERVER + '/api/auth/register', user);
  };

  this.resetPassword = function (user){
    return $http.post(SERVER + '/api/auth/reset_password')
  };
}