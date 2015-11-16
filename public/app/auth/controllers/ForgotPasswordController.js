angular.module('app')

//Depending on the designs im not sure we even need to seperate this controller
//probably could throw on authroization controller and just use templates?
//
//thoughts?
.controller('ForgotPasswordController', function ($scope){
  $scope.templates = [{name: 'forgot-password', url:'partials/resources/reset-password.tpl.html'}]
  $scope.template = $scope.templates[0];
});