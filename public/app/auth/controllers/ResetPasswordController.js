angular.module('app')

.controller('ResetPasswordController', function ($scope, $state, $stateParams, ResetPasswordService){
    console.log("reset password controller", $stateParams);

    var token = $stateParams.token;

    $scope.$watch('$stateParams.token', function () {
        ResetPasswordService.checkIfTokenExists(token).then(function (token) {
            if (token.status !== 200) {
                alert("bad token adios!");
                $state.go('forgot-password');
            } else {
                token = $stateParams.token
            }
        });
    });

    $scope.resetUserPassword = function(inputPassword) {
        console.log($stateParams.token, "what is token", token)
        ResetPasswordService.resetUserPassword(inputPassword, $stateParams.token).then(function (inputPassword) {
            if (inputPassword.status !== 204) {
                alert("problem, please try again");
            } else {
                alert("Password has been reset please log in");
                $state.go('login');
            }
        })
    }
});