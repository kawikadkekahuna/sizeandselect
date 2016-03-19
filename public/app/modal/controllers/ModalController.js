angular.module('app')

.controller('ModalController', function ($scope, $state, $rootScope, ModalFactory) {
  //Add modals here
  $scope.modals = ModalFactory.getAllModals(); 
  /**
   * Modal Listeners
   */
  $scope.$on('modal:updated', function (event,data) {
    $scope.CURRENT_MODAL = data;

    console.log('$scope.CURRENT_MODAL', $scope.CURRENT_MODAL);
    console.log('$scope.modals', $scope.modals);
    _.each($scope.modals, function (template) {
      if (template.name === $scope.CURRENT_MODAL){
        $scope.modal = template;
        return;
      }
    });
  });

  $scope.$on('modal:destroy', function (event,data) {
    $scope.close();
    return;
  });

  $scope.close = function (){
    $scope.CURRENT_MODAL = '';
  };

  $scope.$on('modal:reset', function (){
    $state.reload();
  });

});