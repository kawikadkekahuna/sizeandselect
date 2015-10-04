angular.module('app')

.service('UserService',['$http',UserService]);

function UserService (UserService, $http){

  this.getCurrentUser = function (){
    /**
     * 'return $http post to /api/user/current_user'
     *   - pass ids
     *   - expect status 200
     *   - server sends back user data.
     */


  }

}
