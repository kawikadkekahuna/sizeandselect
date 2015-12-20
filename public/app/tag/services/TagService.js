angular.module('app')

.service('TagService',['$http',TagService])

function TagService ($http) {

  this.addTag = function (tagData){
    return $http.post(SERVER + '/api/tag/create', {tagData: tagData});
  }

  this.getTag = function (id){
    return $http.get(SERVER + '/api/tag/');
  }


}