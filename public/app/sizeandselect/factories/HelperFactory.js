angular.module('app')

.factory('HelperFactory', ['$http', '$rootScope',HelperFactory]);

function HelperFactory($http, $rootScope) {
  var self = this,
      _templates = [{name: 'private', url :'views/partials/navigation-private.html'},
                  {name: 'public', url :'views/partials/navigation-public.html'}];
  this._currentNavigation = {name: 'public', url :'views/partials/navigation-public.html'};

  function setNavigation (nav){
    var template =  _.filter(_templates, function (template){
      return template.name == nav;
    })[0];
    if(!template){
      return console.log('Could not find.  Add more descriptive error message');
    };
    self._currentNavigation = template; 
    return $rootScope.$broadcast('navigation:update', template);
  };

  function getNavigation (){
    return self._currentNavigation; 
  };
  
  function unbindHandlers(){
    // setNavigation('public');
  };

  return{
    setNavigation: function (nav){
      setNavigation(nav); 
    },
    getNavigation: function (){
      console.log('getNavigation()', getNavigation());
      return getNavigation(); 
    },
    unbindHandlers: function (){
      return unbindHandlers()
    }
  }
};