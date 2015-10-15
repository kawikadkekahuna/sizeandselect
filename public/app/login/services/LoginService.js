angular.module('app')

.service('LoginService',['$http', LoginService]);

function LoginService ($http) {
  this.login = function (user) { 
    console.log('user', user);
    return $http.post(SERVER + '/api/login/', user);
  }

}