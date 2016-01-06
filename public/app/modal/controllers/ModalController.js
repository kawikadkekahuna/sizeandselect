angular.module('app')

.controller('ModalController', function ($scope, $state, $rootScope, $sessionStorage) {
  $scope.CURRENT_MODAL = $sessionStorage.SizeSelect.CURRENT_MODAL;
  //Add modals here
  //$sessionStorage.SizeSelect.CURRENT_MODAL.name must match template $scope.modals.name
  $scope.modals = [{name:'addProject', url:'/views/modal/add-project-modal.html'},
                    {name:'addTag', url:'/views/modal/add-tag-modal.html'}
                  ];

  _.each($scope.modals, function (template) {
    if (template.name === $scope.CURRENT_MODAL){
      console.log('template' ,template); 
      $scope.modal = template;
      return;
    }
  });

  $scope.close = function (){
    $scope.CURRENT_MODAL = '';
    $sessionStorage.SizeSelect.CURRENT_MODAL = '';
  };

  $scope.$on('resetModal', function (){
    $state.reload();
  });

});