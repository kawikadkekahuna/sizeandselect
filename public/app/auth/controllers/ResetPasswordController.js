angular.module('app')

.controller('ResetPasswordController', function ($scope, $state, $stateParams, ResetPasswordService){
    console.log("reset password controller", $stateParams);



    $scope.resetUserPassword = function(inputPassword) {
        ResetPasswordService.resetUserPassword(inputPassword).then(function (inputPassword) {
            if (inputPassword.status !== 200) {
                alert("problem, please try again");
            } else {
                alert("Password has been reset please log in");
                $state.go('login');

            }
        })
    }
});