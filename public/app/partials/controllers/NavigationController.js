angular.module('app')

.controller('NavigationController', function($scope, $http, $localStorage, $state, AuthorizationService, DropdownService, RegexService, ModalFactory){

	$scope.isLoggedIn = $localStorage.authenticated;

  $scope.init = function (){
    DropdownService.getAccountTypes().then(function(accountTypes) {
      $scope.accountTypes = accountTypes.data;
      console.log('$scope.accountTypes',$scope.accountTypes);
    });

    $scope.validations = {
      email:RegexService.getEmail(),
      phoneNumber: RegexService.getPhoneNumber()
    };
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
  
  $scope.setModal = function (template){
    ModalFactory.setModal(template);
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


 	$scope.toggle = function (){k
 		if($scope.toggleState == 'hidden'){
 			$scope.toggleState = 'active';
 		}else{
 			$scope.toggleState = 'hidden'	
 		};
 	};

});