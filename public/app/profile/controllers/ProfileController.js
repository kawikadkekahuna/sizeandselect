angular.module('app')

.controller('ProfileController', function ($scope, UserService) {

  $scope.CURRENT_USER = UserService.getCurrentUser() || 1; 

  $scope.editUser = function (user) {
    /**
     * Insert UserService Call
     *   -if success status
     *     -render 'update successful on view'
     *   -else
     *     -render 'updated error on view'
     */


  }


});
