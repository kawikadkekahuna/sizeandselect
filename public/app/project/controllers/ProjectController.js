angular.module('app')

.controller('ProjectController', function ($scope, $rootScope, $sessionStorage, $stateParams, ProjectService, TagService, $state) {
  // $scope.header = {name: 'header', url: '/views/partials/navigation.html'};
  // $scope.modal = {name: 'modal', url: '/views/modal/modal.html'};
  $scope.projectId = $stateParams.projectId;

  TagService.getTags($scope.projectId).then(function (tags){
    $scope.showTags = true;
    $scope.tags = tags.data;
  });

  ProjectService.getProjectById($scope.projectId).then(function (project){
    $scope.project = project.data;
  });

  $scope.newTagModal = function(){
    //must call to reinstantiate ModalController
    $rootScope.$broadcast('resetModal');
    $sessionStorage.SizeSelect.CURRENT_MODAL = 'addTag';
  };

  $scope.addTag = function (tagData){
    tagData.project_id = $scope.projectId;
    console.log('tag',tagData);
    TagService.addTag(tagData).then(function (tag){
      console.log('tag',tag.status);
      if(tag.status == 200){
        $state.go('project.tag',{tagId: tag.data.id});
      };
      return;
    });
  };

  $scope.enterTag = function (tagId){
    $state.go('project.tag',{tagId: tagId});
  };  
});
