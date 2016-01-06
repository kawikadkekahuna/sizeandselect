angular.module('app')

.controller('AuthorizationController', function($scope, $http, $state, $localStorage, $state, AuthorizationService, DropdownService, RegexService) {
  $scope.header = {name: 'header', url :'views/partials/navigation.html'};

  DropdownService.getAccountTypes().then(function(accountTypes) {
    $scope.accountTypes = accountTypes.data;
  });

  $scope.validations = {
    email:RegexService.getEmail(),
    phoneNumber: RegexService.getPhoneNumber()
  };

  $scope.createUser = function(user) {
    $http.defaults.headers.common['Bearer'] = $localStorage.token;
    user.token = $localStorage.token;
    AuthorizationService.createUser(user).then(function (user){
      $localStorage.token = user.data.token;
      $localStorage.userId = user.data.id;
      $state.go('dashboard');
    }); 
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

});