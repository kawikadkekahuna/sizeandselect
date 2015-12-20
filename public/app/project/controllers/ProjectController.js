angular.module('app')

.controller('ProjectController', function ($scope, $rootScope, $sessionStorage, $stateParams, ProjectService, TagService) {
  $scope.projectId = $stateParams.projectId;
  $scope.modal = {name: 'modal', url: 'views/modal/modal.html'};
  $scope.tags = TagService.getTag($scope.projectId);

   
  ProjectService.getProjectById($scope.projectId).then(function (project){
    $scope.project = project.data[0];
    console.log('project', project);
  });

  $scope.addTag = function(){
    //must call to reinstantiate ModalController
    $rootScope.$broadcast('resetModal');
    $sessionStorage.SizeSelect.CURRENT_MODAL = 'addTag';
  };


});
