angular.module('app')

.service('ResetPasswordService', ['$http', ResetPasswordService]);

function ResetPasswordService ($http) {

    this.checkIfTokenExists = function (token) {
        console.log("in the reset pw service toekn checkIfTokenExists", token);
        return $http.get(SERVER + '/api/reset-password?token=' + token);
    }


    this.resetUserPassword = function (inputPassword) {
        return $http.put(SERVER + '/api/reset-password', {
            password: inputPassword
        });
    }
}