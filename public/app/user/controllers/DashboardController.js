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
    $sessionStorage.SizeSelect.CURRENT_MODAL = 'New Project';
  };

  $scope.createProject = function (projectData) {
    projectData.user_id = $localStorage.userId;
    console.log('projectData', projectData);
    ProjectService.create(projectData).then(function (res){
      console.log('project created');
    });
  };

});
