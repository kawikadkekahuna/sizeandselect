angular.module('app')

.controller('ProjectController', function ($scope, $rootScope, $sessionStorage, $stateParams, ProjectService, TagService) {
  $scope.header = {name: 'header', url: 'views/partials/navigation.html'};
  $scope.modal = {name: 'modal', url: 'views/modal/modal.html'};
  $scope.projectId = $stateParams.projectId;

  TagService.getTags($scope.projectId).then(function (tags){
    $scope.tags = tags.data[0];
    console.log($scope.tags);
  });

  ProjectService.getProjectById($scope.projectId).then(function (project){
    $scope.project = project.data;
  });

  $scope.newTagModal = function(){
    //must call to reinstantiate ModalController
    console.log('new tag modal');
    $rootScope.$broadcast('resetModal');
    $sessionStorage.SizeSelect.CURRENT_MODAL = 'addTag';
  };

  $scope.addTag = function (tagData){
    console.log('tagData', tagData);
    tagData.projectId = $scope.projectId;
    TagService.addTag({tagData: tagData});    
  };  

});
