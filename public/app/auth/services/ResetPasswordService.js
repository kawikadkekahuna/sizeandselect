angular.module('app')

.service('ResetPasswordService', ['$http', ResetPasswordService]);

function ResetPasswordService ($http) {

    this.checkIfTokenExists = function (token) {
        return $http.get(SERVER + '/api/reset-password?token=' + token);
    }


    this.resetUserPassword = function (inputPassword, token) {
        return $http.put(SERVER + '/api/reset-password', {
            token: token,
            password: inputPassword.password
        });
    }
}