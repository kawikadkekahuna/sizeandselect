angular.module('app')

.factory('ModalFactory', ['$http', '$rootScope',ModalFactory]);

function ModalFactory($http, $rootScope) {
  this._currentModal = '';

  function getModal() {
    return this._currentModal;    
  };

  function setModal(template) {
    $rootScope.$broadcast('modal:updated', template);
    this._currentModal = template;
  };

  return {
    getModal: function (){
      return getModal();
    },
    setModal: function (template){
      setModal(template);
    },
    destroyModal: function (){
      return $rootScope.$broadcast('modal:destroy');
    }
  };
};