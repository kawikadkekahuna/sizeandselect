angular.module('app')
/**
 * 
 * [Dropdown Select will only render if the 'name' property is in the Model's field]
 */
.directive('dropdownSelect', ['DropdownService', function(DropdownService) {
  return {
    restrict: 'E',
    require: 'ngModel',
    scope: {
      items: '='
    },
    controller: 'RegistrationController as dropdownSelect',
    templateUrl: 'partials/dropdown-select.tpl.html',
    link: function(scope, element, attributes, ngModel) {

      /**
       * [attachToModel]
       * [Attaches value of item to ng-model]
       */
      scope.attachToModel = function() {
        ngModel.$setViewValue(scope.itemState);
        ngModel.$render();
      }

    }
  }
}]);