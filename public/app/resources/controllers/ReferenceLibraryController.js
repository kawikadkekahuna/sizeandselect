angular.module('app')

.controller('ReferenceLibraryController', function ($scope) {
  $scope.header = {name: 'header', url :'views/partials/navigation.html'};


  $scope.test = 'ReferenceLibraryController linked';
});