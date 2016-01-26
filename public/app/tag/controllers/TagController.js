angular.module('app')

.controller('TagController', function ($scope, $stateParams, $state, TagService, DropdownService, DataCalculationService) {

  DropdownService.getApiAsmeToggleSizes().then(function(sizingToggles) {
    $scope.sizingToggles = sizingToggles.data;
  });

  DropdownService.getMediaTypes().then(function(mediaTypes) {
    $scope.mediaTypes = mediaTypes.data;
  });

  DropdownService.getPressureUnits().then(function(pressureUnits) {
    console.log("pressureUnits", pressureUnits)
    $scope.pressureUnits = pressureUnits.data;
  });

  DropdownService.getTemperatureUnits().then(function(temperatureUnits) {
    $scope.temperatureUnits = temperatureUnits.data;
  });

  DropdownService.getViscosityUnits().then(function(viscosityUnits) {
    $scope.viscosityUnits = viscosityUnits.data;
  });

  DropdownService.getFlowCapacityUnits().then(function(flowCapacityUnits) {
    $scope.flowCapacityUnits = flowCapacityUnits.data;
  });

  DropdownService.getSizingBasisUnits().then(function(sizingBasisUnits) {
    $scope.sizingBasisUnits = sizingBasisUnits.data;
  });

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

  $scope.calculateReliefTemp = function (formInput) {
    DataCalculationService.calculateReliefTemp(formInput);
  }

});


