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

  $scope.login = function(user) {
    AuthorizationService.login(user).success(function (data, status) {
      if(data.statusCode !== 200){
        return;
      };
      $localStorage.userId = data.id;
      $localStorage.token = data.sizeselect_access_token;
      $state.go('dashboard');
    })
    .error(function (data) {
      $state.go('login');
    });
  };

  $scope.logout = function (){
    AuthorizationService.logout();
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