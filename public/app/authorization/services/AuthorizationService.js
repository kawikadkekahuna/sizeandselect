angular.module('app')

.service('AuthorizationService',['$http', AuthorizationService]);

function AuthorizationService ($http) {
  this.login = function (user) { 
    return $http.post(SERVER + '/api/auth/login', user);
  }

  this.logout = function () {
    return $http.get(SERVER + '/api/auth/logout');
  }

  this.isAuthenticated = function () {
  }
}