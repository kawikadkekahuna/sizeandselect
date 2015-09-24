angular.module('app')

.controller('RegistrationController', function($scope, DropdownService, RegistrationService) {

  DropdownService.getAccountTypes().then(function(accountTypes) {
    $scope.accountTypes = accountTypes.data;
  });

  DropdownService.getStates().then(function(states) {
    $scope.states = states.data;
  });

  $scope.createUser = function(user) {
    // username: DataTypes.STRING,
    // first_name: DataTypes.STRING,
    // last_name: DataTypes.STRING,
    // email: DataTypes.STRING,
    // password: DataTypes.STRING,
    // city: DataTypes.STRING,
    // state: DataTypes.STRING,
    // zipcode: DataTypes.STRING,
    // country: DataTypes.STRING,
    // company: DataTypes.STRING,
    // job_title: DataTypes.STRING,
    // phone_number: DataTypes.INTEGER,
    // user_picture: DataTypes.STRING,
    // hidden: DataTypes.BOOLEAN
    user.hidden = false;
    console.log(user);
    RegistrationService.createUser(user).then(function(res){
      console.log('res',res)
    });
  };

});