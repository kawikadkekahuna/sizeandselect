angular.module('app')

.controller('ResetPasswordController', function ($scope, $state, $stateParams, ResetPasswordService){
    var token = $stateParams.token,
        userToken;

    $scope.$watch('$stateParams.token', function () {
        ResetPasswordService.checkIfTokenExists(token).then(function (user) {
            console.log("user", user);
            if (user.status !== 200) {
                alert("bad token adios!");
                $state.go('forgot-password');
            }
            userToken = user.data.token;
        });
    });

    $scope.resetUserPassword = function(inputPassword) {
        ResetPasswordService.resetUserPassword(inputPassword, userToken).then(function (inputPassword) {
            if (inputPassword.status !== 204) {
                alert("problem, please try again");
            } else {
                alert("Password has been reset");
                $state.go('login');
            }
        })
    }
});