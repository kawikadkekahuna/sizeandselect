angular.module('app')

.controller('ProfileController', function ($scope, AuthorizationService) {
	$scope.init = function init(){
		AuthorizationService.getUser().then(function (user){
			$scope.user = user.data;
		});
	}

});
