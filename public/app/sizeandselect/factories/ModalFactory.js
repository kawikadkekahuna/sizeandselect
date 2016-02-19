angular.module('app')

.factory('ModalFactory', ['$http', '$rootScope',ModalFactory]);

function ModalFactory($http, $rootScope) {
  this._currentModal = '';

  function getModal() {
    return this._currentModal;    
  };

  function setModal(template) {
    this._currentModal = template;
    $rootScope.$broadcast('modal:updated', template);
  };

  return {
    getModal: function (){
      return getModal();
    },
    setModal: function (template){
      setModal(template);
    },
    destroyModal: function (){
      setModal('');
      return $rootScope.$broadcast('modal:destroy');
    }
  };
};