angular.module('app')

.controller('NavigationController', function($scope, $http, $localStorage, $state, AuthorizationService, DropdownService, RegexService, ModalFactory, HelperFactory){

	$scope.isLoggedIn = $localStorage.authenticated;
  $scope.init = function (){
    DropdownService.getAccountTypes().then(function(accountTypes) {
      $scope.accountTypes = accountTypes.data;
    });

    $scope.validations = {
      email:RegexService.getEmail(),
      phoneNumber: RegexService.getPhoneNumber()
    };

    $scope._toggleState = 'hidden' 
  };

  $scope.createUser = function(user) {
    $http.defaults.headers.common['Bearer'] = $localStorage.token;
    user.token = $localStorage.token;
    AuthorizationService.createUser(user).then(function (user){
      $localStorage.token = user.data.token;
      $localStorage.userId = user.data.id;
      ModalFactory.destroyModal();
      $state.go('layout.dashboard');
    }); 
  };

  $scope.destroyModal = function (){
    ModalFactory.destroyModal();
  };
  
  $scope.setModal = function (template){
    if(!ModalFactory.getModal()){
      ModalFactory.setModal(template);
      $('#nav__login_dropdown').removeClass('active'); 
    }else{
      ModalFactory.destroyModal();
    };
  };

 	$scope.toggle = function (event){
    var currentState = $('#nav__login_dropdown'); 
    if(!currentState.hasClass('active')){
      (ModalFactory.getModal() ) ? ModalFactory.destroyModal() : null;
      currentState.addClass('active');
    }else{
      currentState.removeClass('active');
    };
 	};

});