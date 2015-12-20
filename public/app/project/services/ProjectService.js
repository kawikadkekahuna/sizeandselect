angular.module('app')

.service('ProjectService', ['$http', '$localStorage', ProjectService]);

function ProjectService ($http, $localStorage) {
  this.create = function (projectData){
    $http.defaults.headers.common['Bearer'] = $localStorage.token;
    return $http.post(SERVER + '/api/project/create', projectData)
  };

  this.getProjects = function () {
    console.log($localStorage.userId);
    return $http.get(SERVER + '/api/project/projects',{ params:{user_id: $localStorage.userId}});
  };

  this.getProjectById = function (projectId){
    console.log('getProjectById',projectId);
    return $http.get(SERVER + '/api/project/id',{ params:{projectId: projectId}});
  }
};