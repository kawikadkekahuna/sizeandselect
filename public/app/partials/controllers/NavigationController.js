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

    $scope.toggleState = 'hidden' 
  };

  $scope.createUser = function(user) {
    $http.defaults.headers.common['Bearer'] = $localStorage.token;
    user.token = $localStorage.token;
    AuthorizationService.createUser(user).then(function (user){
      $localStorage.token = user.data.token;
      $localStorage.userId = user.data.id;
      ModalFactory.destroyModal();
      $state.go('dashboard');
    }); 
  };

  $scope.destroyModal = function (){
    ModalFactory.destroyModal();
  };
  
  $scope.setModal = function (template){
    if(!ModalFactory.getModal()){
      ModalFactory.setModal(template);
    }else{
      ModalFactory.destroyModal();
    };
  };

 	$scope.toggle = function (){
    if($scope.toggleState == 'hidden'){
      ModalFactory.destroyModal();
      $scope.toggleState = 'active';
    }else{
      $scope.toggleState = 'hidden' 
    };
 	};

});