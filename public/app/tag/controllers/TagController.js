angular.module('app')

.controller('TagController', function ($scope, $stateParams, $state, TagService, UnitService) {
  $scope.init = function (){
    var tagId = $stateParams.tagId;
    TagService.getTagById(tagId).then(function (tag){
      $scope.tag = tag
    });
    $scope.TAG_DEFAULT_VALUES = TagService.defaultValues();
    $scope.header = {name: 'header', url: '/views/partials/navigation.html'};
    $scope.modal = {name: 'modal', url: '/views/modal/modal.html'};
    /**
     * @param  {callback}
     *  TODO:
     *  Rename callback to appropriate variable name.
     *  Not enough data to continue development.
     * @return {???}
     */
  };

  $scope.createTagAnalytics = TagService.createTagAnalytics();
  $scope.testMessage = 'Tag Controller Linked';
});


