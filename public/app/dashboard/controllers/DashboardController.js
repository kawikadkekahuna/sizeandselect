angular.module('app')

.controller('DashboardController', function ($scope, $rootScope) {
  console.log('Dashboard controller');  

  $scope.testMessage = 'Dashboard Controller Linked';


});
