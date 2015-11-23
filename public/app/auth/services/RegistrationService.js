angular.module('app')

.service('RegistrationService', ['$http', RegistrationService]);

function RegistrationService ($http) {

  this.createUser = function (user) {
    return $http.post(SERVER + '/api/registration/register',user);
  }
}