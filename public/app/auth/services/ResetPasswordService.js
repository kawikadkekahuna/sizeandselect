angular.module('app')

.service('ResetPasswordService', ['$http', ResetPasswordService]);

function ResetPasswordService ($http) {

    // return $http.get(SERVER + '/api/reset-password/:token');


  this.resetUserPassword = function (inputPassword) {
    console.log("in the service");
    return $http.put(SERVER + '/api/reset-password', {
        password: inputPassword
    });
  }
}