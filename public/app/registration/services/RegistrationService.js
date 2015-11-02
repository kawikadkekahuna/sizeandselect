angular.module('app')

.service('RegistrationService', ['$http', RegistrationService]);

function RegistrationService ($http) {

  this.createUser = function (user) {
    console.log("userss", user.account_type.id);
    return $http.post(SERVER + '/api/registration/register', {
      newUser: user
    });
  }
}