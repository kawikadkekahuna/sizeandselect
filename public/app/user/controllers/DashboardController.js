angular.module('app')

.controller('DashboardController', function ($scope, $state, $stateParams, $rootScope, $sessionStorage, $location, $localStorage, ProjectService) {
  $scope.header = {name: 'header', url: 'views/partials/navigation.html'};
  $scope.modal = {name: 'modal', url: 'views/modal/modal.html'};

  ProjectService.getProjects().then(function (projects) {
    $scope.projects = projects.data;
  });

  $scope.newProjectModal = function(){
    //must call to reinstantiate ModalController
    $rootScope.$broadcast('resetModal');
    $sessionStorage.SizeSelect.CURRENT_MODAL = 'addProject';
  };

  $scope.createProject = function (projectData) {
    if(projectData){
      projectData.user_id = $localStorage.userId;
      ProjectService.create(projectData).then(function (res){
        if(res.status === 200){
          $scope.openProject(res.data.id)
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
