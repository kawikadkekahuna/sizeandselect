angular.module('app')

.controller('GlobalController', function ($scope, $state, AuthorizationService, $localStorage){
  $scope.header = {name: 'header', url :'views/partials/navigation-public.html'};
  $scope.modal = {name: 'modal', url: '/views/modal/modal.html'};
  $scope.token = $localStorage.token;
  $scope.authenticated = $localStorage.authenticated;
  // $scope.publicNavigation = {name: 'navigation:public', url: '/views/partials/navigation-public.html'};
  // $scope.privateNavigation = {name: 'navigation:private', url: '/views/partials/navigation-private.html'};

  $scope.logout = function(user){
    AuthorizationService.logout(user).then(function () {
      delete($localStorage.token);
      $state.go('login')
    });
  };

});