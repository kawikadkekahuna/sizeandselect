angular.module('app')

.controller('LoginController', function($scope, LoginService, $state) {

  $scope.login = function(user) {
      LoginService.login(user).success(function (data, status) {
        console.log('Successful login.');
        console.log('data = ' + data);
        console.log('status = ' + status); 
        $state.go('about-us');  
    })
      .error(function (data) {
        console.log('Error: ' + data);
        $state.go('login'); 
    });
  }

});