angular.module('app')

.controller('DashboardController', function ($scope, $state, $stateParams, $rootScope, $sessionStorage, $location, $localStorage, ProjectService) {
  $scope.header = {name: 'header', url: 'views/partials/navigation.html'};
  $scope.modal = {name: 'modal', url: 'views/modal/modal.html'};

  ProjectService.getProjects().then(function (projects) {
    $scope.projects = projects.data;
    console.log('$scope.projects', projects);
  });

  $scope.newProjectModal = function(){
    //must call to reinstantiate ModalController
    $rootScope.$broadcast('resetModal');
    $sessionStorage.SizeSelect.CURRENT_MODAL = 'addProject';
  };

  $scope.createProject = function (projectData) {
    projectData.user_id = $localStorage.userId;
    ProjectService.create(projectData).then(function (res){
      if(res.status === 200){
        console.log('res.data.id',res.data.id);
        $state.go('project',{projectId: res.data.id});
      };
      return;
    });
  };

  $scope.openProject = function (id){
    $state.go('project',{projectId: id});
  }

});
