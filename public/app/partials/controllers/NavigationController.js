angular.module('app')

.controller('NavigationController', function($scope, $localStorage, AuthorizationService, $state){

	$scope.isLoggedIn = $localStorage.authenticated;
	
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

	$scope.toggleState = 'hidden';

 	$scope.toggle = function (){
 		if($scope.toggleState == 'hidden'){
 			$scope.toggleState = 'active';
 		}else{
 			$scope.toggleState = 'hidden'	
 		};
 	};

});