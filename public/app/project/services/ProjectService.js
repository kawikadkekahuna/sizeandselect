angular.module('app')

.service('ProjectService', ['$http', ProjectService]);

function ProjectService ($http) {
  this.create = function (projectData){
    return $http.post(SERVER + '/api/project/create', projectData)
  }
}