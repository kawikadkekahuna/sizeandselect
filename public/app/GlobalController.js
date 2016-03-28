angular.module('app')

.controller('GlobalController', function ($scope, $state, AuthorizationService, $localStorage, HelperFactory, ModalFactory){
  this.header = HelperFactory.getNavigation();
  this.modal = {name: 'modal', url: '/views/modal/modal.html'};
  this.token = $localStorage.token;
  this.authenticated = $localStorage.authenticated;

  this.login = function(user) {
    AuthorizationService.login(user).success(function (data, status) {
      if(data.statusCode !== 200){
        return;
      };
      $localStorage.userId = data.id;
      $localStorage.token = data.sizeselect_access_token;
      $state.go('layout.dashboard');
    })
    .error(function (data) {
      $state.go('layout.home');
    });
  };

  this.unfocusModal = function(event){
    event.preventDefault();
    event.stopPropagation();
    var currentModal = ModalFactory.getModal();
    if(currentModal){
      console.log('currentModal', currentModal);
      ModalFactory.destroyModal();
    }
  };

  $scope.$on('navigation:update', function(event,data) {
    this.header = data;
  });


  $scope.$watch(function (){return $localStorage.authenticated}, function (){
    if($localStorage.authenticated){
      HelperFactory.setNavigation('private');
    }else{
      HelperFactory.setNavigation('public');
    }
  })
});