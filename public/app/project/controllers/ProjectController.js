angular.module('app')

.controller('ProjectController', function ($scope, $rootScope, $sessionStorage, $stateParams, ProjectService, TagService, $state, ModalFactory) {
  $scope.projectId = $stateParams.projectId;

  TagService.getTags($scope.projectId).then(function (tags){
    $scope.showTags = true;
    $scope.tags = tags.data;
  });

  ProjectService.getProjectById($scope.projectId).then(function (project){
    $scope.project = project.data;
  });

  $scope.setModal = function (template){
    ModalFactory.setModal(template);
  };


  $scope.addTag = function (tagData){
    tagData.project_id = $scope.projectId;
    TagService.addTag(tagData).then(function (tag){
      if(tag.status == 200){
        $state.go('project.tag',{tagId: tag.data.id});
        $rootScope.$broadcast('modal:destroy');
      };
      return;
    });
  };

  $scope.enterTag = function (tagId){
    $state.go('project.tag',{tagId: tagId});
  };  
});
