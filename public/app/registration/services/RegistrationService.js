angular.module('app')

.service('RegistrationService', ['$http', RegistrationService]);

function RegistrationService($http) {
  this.createUser = function(user) {
    return $http.post(SERVER + '/api/user_routes/create_user', {
      newUser: user
    });
  }

  this.getUserDefault = function() {
    var defaultValues = {
      hidden: false
    };

    return defaultValues;
  }


}