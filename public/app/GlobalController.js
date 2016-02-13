angular.module('app')

.controller('GlobalController', function ($scope, $state, AuthorizationService, $localStorage){
  $scope.token = $localStorage.token;
  $scope.header = {name: 'header', url: '/views/partials/navigation.html'};
  $scope.modal = {name: 'modal', url: '/views/modal/modal.html'};

  $scope.logout = function(user){
    AuthorizationService.logout(user).then(function () {
      delete($localStorage.token);
      $state.go('login')
    });
  };

});