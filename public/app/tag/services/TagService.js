angular.module('app')

.service('TagService',['$http',TagService])

function TagService ($http) {

  this.addTag = function (tagData){
    return $http.post(SERVER + '/api/tag/create', {tagData: tagData});
  }

  this.getTags = function (projectId){
    return $http.get(SERVER + '/api/tag/tags',{ params:{projectId: projectId}});
  }

  this.getTagById = function (tagId){
    return $http.get(SERVER + '/api/tag/tags',{ params:{tagId: tagId}});
  }

}