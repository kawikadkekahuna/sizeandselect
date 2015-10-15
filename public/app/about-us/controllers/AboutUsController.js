angular.module('app')

.controller('AboutUsController', function ($scope, LoginService, $localStorage, $state) {
  console.log('About Us controller');  

  $scope.testMessage = 'AboutUs Controller Linked';

  $scope.logout = function (user){
    LoginService.logout().then(function (data){
      $localStorage.$reset();
      console.log('deleted');
      console.log('data', data);
      $state.go('login')
    });
  }

});
