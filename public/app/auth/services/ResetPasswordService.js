angular.module('app')

.service('ResetPasswordService', ['$http', ResetPasswordService]);

function ResetPasswordService ($http) {

    this.checkIfTokenExists = function (token) {
        console.log("checkIfTokenExists", token);

        return $http.get(SERVER + '/api/reset-password?token=' + token);
    }


    this.resetUserPassword = function (inputPassword, token) {
        console.log("dsaf", token)
        console.log(token, "inputPassword", inputPassword);
        return $http.put(SERVER + '/api/reset-password', {
            token: token,
            password: inputPassword.password
        });
    }
}