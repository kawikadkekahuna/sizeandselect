angular.module('app')

.service('UserService',['$http',UserService]);

function UserService (UserService, $http){

  this.getCurrentUser = function (){
    /**
     * 'return $http GET to /api/user/current_user'
     *   - pass ids
     *   - expect status 200
     *   - ???.
     */
  }

  this.editUser = function (user){
    /**
     * 'return $http PUT to /api/user/update_user'
     * -pass user data
     * -expect 200
     * -expect success message
     */
    console.log('click');
    console.log('user',user);
  }

}
