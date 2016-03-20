angular.module('app')

.factory('ModalFactory', ['$http', '$rootScope',ModalFactory]);

function ModalFactory($http, $rootScope) {
  this._currentModal = '';
  this.allModals = [{name:'addProject', url:'/views/modal/add-project-modal.html'},
                    {name:'addTag', url:'/views/modal/add-tag-modal.html'},
                    {name:'register', url:'/views/modal/register-user-modal.html'},
                    {name:'login', url:'/views/modal/login-modal.html'}
                    ];
  var self = this;


  function getAllModals(){
    return self.allModals;
  }

  function getModal() {
    return self._currentModal;    
  };

  function setModal(template) {
    if(!template){
      return;
    };
    //refactor for es6.
    self._currentModal = template;
    $rootScope.$broadcast('modal:updated', template);
  };

  return {
    getAllModals: function (){
      return getAllModals();
    },
    getModal: function (){
      return getModal();
    },
    setModal: function (template){
      setModal(template);
    },
    destroyModal: function (){
      self._currentModal = '';
      return $rootScope.$broadcast('modal:destroy');
    }
  };
};