angular.module('app')

.controller('AuthorizationController', function($scope, $state, AuthorizationService, SessionService) {

  $scope.login = function(user) {
      AuthorizationService.login(user).success(function (data, status) {
        console.log(data);
        // SessionService.create(data.id, )
        // $state.go('about-us');  
    })
      .error(function (data) {
        $state.go('login'); 
    });
  }


});