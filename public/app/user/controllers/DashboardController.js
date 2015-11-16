angular.module('app')

.controller('DashboardController', function ($scope, $state, $stateParams, $rootScope, $sessionStorage, $location, ProjectService) {
  $scope.header = {name: 'header', url: 'views/partials/navigation.html'};
  $scope.modal = {name: 'modal', url: 'views/modal/modal.html'};
  
  $scope.newProjectModal = function(){
    //must call to reinstantiate ModalController
    $rootScope.$broadcast('resetModal');
    $sessionStorage.SizeSelect.CURRENT_MODAL = 'New Project';
  };

  $scope.createProject = function (projectData) {
    ProjectService.create(projectData).then(function (res){
      console.log('res', res);
    });
  };

});
