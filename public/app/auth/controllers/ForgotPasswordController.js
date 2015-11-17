angular.module('app')

.controller('ForgotPasswordController', function ($scope, $state, ForgotPasswordService){
    $scope.header = {name: 'header', url :'views/partials/navigation.html'};

  $scope.sendForgotPasswordEmail = function (inputEmail) {
    console.log("on scope", inputEmail);
    ForgotPasswordService.sendForgotPasswordEmail(inputEmail).then(function (inputEmail) {
        console.log("inputEmail", inputEmail);
        // $state.go('login');
    })
  }

});