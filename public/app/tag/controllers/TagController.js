angular.module('app')

.controller('TagController', function ($scope, $stateParams, TagService) {
  $scope.header = {name: 'header', url: '/views/partials/navigation.html'};
  $scope.modal = {name: 'modal', url: '/views/modal/modal.html'};


  $scope.init = function (){
    var tagId = $stateParams.tagId;
    TagService.getTagById(tagId).then(function (tag){
      $scope.tagData = tag
    });
  }

  $scope.testMessage = 'Tag Controller Linked';

});
