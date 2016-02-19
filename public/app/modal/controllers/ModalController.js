angular.module('app')

.controller('ModalController', function ($scope, $state, $rootScope, $sessionStorage, ModalFactory) {
  //Add modals here
  //$sessionStorage.SizeSelect.CURRENT_MODAL.name must match template $scope.modals.name
  $scope.modals = [{name:'addProject', url:'/views/modal/add-project-modal.html'},
                    {name:'addTag', url:'/views/modal/add-tag-modal.html'},
                    {name:'register', url:'/views/modal/register-user-modal.html'}
                  ];
  /**
   * Modal Listeners
   */
  $scope.$on('modal:updated', function(event,data) {
    $scope.CURRENT_MODAL = data;
    _.each($scope.modals, function (template) {
      if (template.name === $scope.CURRENT_MODAL){
        $scope.modal = template;
        return;
      }
    });
  });

  $scope.$on('modal:destroy', function(event,data) {
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