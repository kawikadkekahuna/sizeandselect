angular.module('app')

.controller('GlobalController', function ($scope, $state, AuthorizationService, $localStorage, HelperFactory){
  $scope.header = HelperFactory.getNavigation();
  $scope.modal = {name: 'modal', url: '/views/modal/modal.html'};
  $scope.token = $localStorage.token;
  $scope.authenticated = $localStorage.authenticated;
  // $scope.publicNavigation = {name: 'navigation:public', url: '/views/partials/navigation-public.html'};
  // $scope.privateNavigation = {name: 'navigation:private', url: '/views/partials/navigation-private.html'};

  $scope.setHeaderPublic = function (){
    HelperFactory.setNavigation('public');
  };

  $scope.$on('navigation:update', function(event,data) {
    $scope.header = data;
  });

  $scope.$watch(function (){return $localStorage.authenticated}, function (){
    if($localStorage.authenticated){
      HelperFactory.setNavigation('private');
    }else{
      HelperFactory.setNavigation('public');
    }
  })
});