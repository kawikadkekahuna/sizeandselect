angular.module('app')

.controller('ModalController', function ($scope, $state, $rootScope, $sessionStorage) {
  $scope.CURRENT_MODAL = $sessionStorage.SizeSelect.CURRENT_MODAL;
  //Add modals here
  //$sessionStorage.SizeSelect.CURRENT_MODAL.name must match template $scope.modals.name
  $scope.modals = [{name:'New Project', url:'views/modal/new-project-modal.html'}];

  _.each($scope.modals, function (template) {
    if (template.name === $scope.CURRENT_MODAL){
      $scope.modal = template;
      return;
    }
    $scope.modal = null;
  });


  $scope.close = function (){
    $scope.CURRENT_MODAL = '';
    $sessionStorage.SizeSelect.CURRENT_MODAL = '';
  };

  $scope.$on('resetModal', function (){
    $state.reload();
  });


});