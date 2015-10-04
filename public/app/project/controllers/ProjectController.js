angular.module('app')

.controller('ProjectController', function ($scope, $state, ProjectService) {


  ProjectService.getValveTypes().then(function (type){
    $scope.valves = type.data
  });

  $scope.route = function ( url ){

  }

  $scope.showModal = function () {
    alert('bai');
    $state.go('project-temp');
  }

  $scope.create = function (project) {
    ProjectService.create(project).then(function (res){
      /**
       * If Res Status == 200
       *   -Render Successful create project message on view
       *   -Update array of projects.
       *      
       */
      

    });
  }



});
