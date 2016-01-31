angular.module('app')

.controller('ModalController', function ($scope, $state, $rootScope, $sessionStorage, ModalFactory) {
  //Add modals here
  //$sessionStorage.SizeSelect.CURRENT_MODAL.name must match template $scope.modals.name
  $scope.modals = [{name:'addProject', url:'/views/modal/add-project-modal.html'},
                    {name:'addTag', url:'/views/modal/add-tag-modal.html'}
                  ];


  $scope.$on('modal:updated', function(event,data) {
    $scope.CURRENT_MODAL = data;
    _.each($scope.modals, function (template) {
      if (template.name === $scope.CURRENT_MODAL){
        $scope.modal = template;
        return;
      }
    });
  });



  $scope.close = function (){
    $scope.CURRENT_MODAL = '';
    $sessionStorage.SizeSelect.CURRENT_MODAL = '';
  };

  $scope.$on('resetModal', function (){
    $state.reload();
  });

});