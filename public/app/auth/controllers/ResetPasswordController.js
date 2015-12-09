angular.module('app')

.controller('ResetPasswordController', function ($scope, $state, $stateParams, ResetPasswordService){
    console.log("reset password controller", $stateParams.token);



    $scope.$watch('$stateParams.token', function () {
        ResetPasswordService.checkIfTokenExists($stateParams.token).then(function (token) {
            console.log("token", token);
            if (token.status !== 200) {
                alert("bad token adios!");
                // $state.go('forgot-password');
            } else {
                alert("time to load the form to reset");
            }
        });
    })


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