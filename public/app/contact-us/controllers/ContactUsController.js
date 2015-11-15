angular.module('app')

.controller('ContactUsController', function ($scope) {
  console.log('contact us controller');  
  $scope.header = {name: 'header', url :'views/partials/navigation.html'};

  $scope.testMessage = 'Contact Us Controller Linked';


});
