angular.module('app')

.controller('ForgotPasswordController', function ($scope, $state, ForgotPasswordService){
    $scope.header = {name: 'header', url :'views/partials/navigation.html'};

  $scope.sendForgotPasswordEmail = function (inputEmail) {
    console.log("on scope", inputEmail);
    ForgotPasswordService.sendForgotPasswordEmail(inputEmail).then(function (inputEmail) {
        console.log("inputEmail", inputEmail);

        if (inputEmail.response !== 200) {

            alert("problem, please try again");
        } else {
            alert("Please check your email for pw reset instructions");
            $state.go('login');

        }
    })
  }

});