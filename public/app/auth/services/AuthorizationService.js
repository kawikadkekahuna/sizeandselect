angular.module('app')

.service('AuthorizationService',['$http', '$localStorage', '$state', AuthorizationService]);

function AuthorizationService ($http, $localStorage, $state) {
  this.login = function (user) { 
    return $http.post(SERVER + '/api/auth/login', user);
  };

  this.logout = function () {
    return $http.get(SERVER + '/api/auth/logout').then(function (res){
      delete($localStorage.token);
      delete($localStorage.userId);
      $state.go('login');
    });
  };

  this.createUser = function (user) {
    return $http.post(SERVER + '/api/auth/register', user);
  };

  this.resetPassword = function (user){
    return $http.post(SERVER + '/api/auth/reset_password')
  };

  this.isAuthenticated = function (){
    if($localStorage.token){
      $http.get(SERVER +'/api/auth/isAuthenticated', $localStorage.token).then(function (res){
        console.log('res', res);
        if(res.data.status === 200){
          return true;
        };
        return false;
      });
    }else{
      return false;
    }
    return true;
  };
}