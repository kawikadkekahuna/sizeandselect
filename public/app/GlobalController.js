angular.module('app')

.controller('GlobalController', function ($scope, $state, AuthorizationService, $localStorage){
  $scope.token = $localStorage.token;
  $scope.authenticated = $localStorage.authenticated;
  $scope.publicNavigation = {name: 'navigation:public', url: '/views/partials/navigation.html'};
  $scope.privateNavigation = {name: 'navigation:private', url: '/views/partials/navigation.html'};
  $scope.modal = {name: 'modal', url: '/views/modal/modal.html'};

  $scope.logout = function(user){
    AuthorizationService.logout(user).then(function () {
      delete($localStorage.token);
      $state.go('login')
    });
  };

});