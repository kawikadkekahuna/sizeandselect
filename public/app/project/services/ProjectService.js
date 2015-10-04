angular.module('app')

.service('ProjectService', ['$http', ProjectService]);

function ProjectService ($http) {

  this.getValveTypes = function () {
    return $http.get(SERVER + '/api/defaults/_valve_types');
  }

  this.create = function (project) {
    return $http.post(SERVER + '/api/projects/create');
  }

}