angular.module('app')

.controller('DashboardController', function ($scope, $state, $stateParams, $rootScope, $sessionStorage, $location, $localStorage, ProjectService, ModalFactory) {
  ProjectService.getProjects().then(function (projects) {
    $scope.projects = projects.data;
  });

  $scope.setModal = function (template){
    console.log('template',template);
    ModalFactory.setModal(template);
  };

  $scope.createProject = function (projectData) {
    if(projectData){
      projectData.user_id = $localStorage.userId;
      ProjectService.create(projectData).then(function (res){
        if(res.status === 200){
          $scope.openProject(res.data.id);
          ModalFactory.destroyModal();
        };
        return;
      });
    };
    return;
  };

  $scope.openProject = function (id){
    if(id){
      $state.go('project',{projectId: id});
    };
    return;
  }

});
