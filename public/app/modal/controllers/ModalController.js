angular.module('app')

.controller('ModalController', function ($scope, $state, $rootScope, $sessionStorage) {
  $scope.CURRENT_MODAL = $sessionStorage.SizeSelect.CURRENT_MODAL;
  $scope.close = function (){
    $scope.CURRENT_MODAL = '';
    $sessionStorage.SizeSelect.CURRENT_MODAL = '';
  };

  $scope.$on('resetModal', function (){
    $state.reload();
  });


});