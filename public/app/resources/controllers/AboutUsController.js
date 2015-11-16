angular.module('app')

.controller('AboutUsController', function ($scope, $localStorage, $state) {
  $scope.header = {name: 'header', url :'views/partials/navigation.html'};

  $scope.testMessage = 'AboutUs Controller Linked';

});
