angular.module('app')

.factory('ModalFactory', ['$http', '$rootScope',ModalFactory]);

function ModalFactory($http, $rootScope) {
  this._currentModal = '';
  this.allModals = [{name:'addProject', url:'/views/modal/add-project-modal.html'},
                    {name:'addTag', url:'/views/modal/add-tag-modal.html'},
                    {name:'register', url:'/views/modal/register-user-modal.html'},
                    {name:'login', url:'/views/modal/login-modal.html'}
                    ];

  function getAllModals(){
    return this.allModals;
  }

  function getModal() {
    return this._currentModal;    
  };

  function setModal(template) {
    if(!template){
      return;
    };
    this._currentModal = template;
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
      this._currentModal = '';      
      return $rootScope.$broadcast('modal:destroy');
    }
  };
};