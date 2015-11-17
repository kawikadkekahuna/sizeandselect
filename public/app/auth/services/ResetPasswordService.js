angular.module('app')

.service('ResetPasswordService', ['$http', ResetPasswordService]);

function ResetPasswordService ($http) {

    // return $http.get(SERVER + '/api/reset-password/:token');


  this.resetUserPassword = function (inputPassword) {
    return $http.put(SERVER + '/api/reset-password', {
        password: inputPassword
    });
  }
}