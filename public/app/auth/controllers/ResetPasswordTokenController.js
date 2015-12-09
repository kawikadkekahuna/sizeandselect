angular.module('app')

.controller('ResetPasswordTokenController', function ($scope, $state, $stateParams, ResetPasswordService){


    $scope.$on('$stateChangeSuccess', function () {
        ResetPasswordService.checkIfTokenExists($stateParams.token).then(function (token) {
            if (token.status !== 200) {
                alert("bad token adios!");
                $state.go('forgot-password');
            } else {
                alert("time to load the form to reset");
                $state.go('reset-password-form', {token: $stateParams.token});
            }
        });
    })

});