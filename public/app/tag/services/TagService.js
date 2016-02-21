angular.module('app')

.service('TagService',['$http','$state',TagService])

function TagService ($http, $state) {

  this.addTag = function (tagData){
    return $http.post(SERVER + '/api/tag/create', tagData);
  };

  this.getTags = function (projectId){
    return $http.get(SERVER + '/api/tag/tags',{ params:{projectId: projectId}});
  };

  this.getTagById = function (tagId){
    return $http.get(SERVER + '/api/tag/id',{ params:{tagId: tagId}});
  };

  this.createTagAnalytics = function(tagAnalytics){
    return $http.post(SERVER + '/api/tag/tag-sheet' , tagAnalytics)
  };

  this.defaultValues = function (){
    var config = {
      ATM_PRESSURE: 14.696,
      COMPRESSIBILITY: 1,
      RUPTURE_DISC: 1
    };
    return config;
  };

};