angular.module('app')

.controller('AuthorizationController', function($scope, $state, $localStorage, $state, AuthorizationService) {
  $scope.header = {name: 'header', url :'views/partials/navigation.html'};

  $scope.login = function(user) {
    AuthorizationService.login(user).success(function (data, status) {
      if(data.statusCode !== 200){
        return;
      };
      $localStorage.token = data.sizeselect_access_token;
      $state.go('dashboard');  
    })
    .error(function (data) {
      $state.go('login'); 
    });
  };

});