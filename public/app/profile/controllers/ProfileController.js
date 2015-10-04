angular.module('app')

.controller('ProfileController', function ($scope, UserService) {
  console.log('profile controller');  

  $scope.CURRENT_USER = UserService.getCurrentUser() || 1; 




});
