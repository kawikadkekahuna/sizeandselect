angular.module('app')

.service('TagService',['$http','$state',TagService])

function TagService ($http, $state) {

  this.addTag = function (tagData){
    return $http.post(SERVER + '/api/tag/create', {tagData: tagData});
  };

  this.getTags = function (projectId){
    return $http.get(SERVER + '/api/tag/tags',{ params:{projectId: projectId}});
  };

  this.getTagById = function (tagId){
    return $http.get(SERVER + '/api/tag/id',{ params:{tagId: tagId}});
  };

  this.createTagAnalytics = function(tagAnalytics){
    /**
     * TODO:
     * What to do with data?
     * Redirects to next state as placeholder
     */
    console.log(tagAnalytics);
    $state.go('project.tag.selection-sheet');
  };

  this.defaultValues = function (){
    var config = {
      ATM_PRESSURE: 14.696,
    };
    return config;
  };

};