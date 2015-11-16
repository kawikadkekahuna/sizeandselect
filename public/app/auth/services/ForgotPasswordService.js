angular.module('app')

.service('ForgotPasswordService', ['$http', ForgotPasswordService]);

function ForgotPasswordService ($http) {

  this.sendForgotPasswordEmail = function (inputEmail) {
    console.log("in the service");
    return $http.put(SERVER + '/api/forgot-password', {
      email: inputEmail
    });
  }
}