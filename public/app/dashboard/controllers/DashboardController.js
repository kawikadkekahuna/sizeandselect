angular.module('app')

.controller('DashboardController', function ($scope, $rootScope) {
  $scope.header = {name: 'header', url :'views/partials/navigation.html'};
    

  $scope.testMessage = 'Dashboard Controller Linked';


});
