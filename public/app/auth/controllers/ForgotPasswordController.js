angular.module('app')

//Depending on the designs im not sure we even need to seperate this controller
//probably could throw on authroization controller and just use templates?
//
//thoughts?
.controller('ForgotPasswordController', function ($scope, $state, ForgotPasswordService){
  $scope.sendForgotPasswordEmail = function (inputEmail) {
    ForgotPasswordService.sendForgotPasswordEmail(inputEmail).then(function (inputEmail) {
        console.log("inputEmail", inputEmail);
        // $state.go('login');
    })
  }
});