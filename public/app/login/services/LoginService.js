angular.module('app')

.service('LoginService',['$http', LoginService]);

function LoginService ($http) {

  this.login = function (user) { 
    return $http.post(SERVER + '/api/login/', user);
  }

  this.logout = function () {
    return $http.get(SERVER + '/api/logout/');
  }

}