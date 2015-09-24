angular.module('app')

.directive('dropdownSelect', ['DropdownService', function(DropdownService) {
  return {
    restrict: 'E',
    require: 'ngModel',
    controller: 'RegistrationController as dropdownSelect',
    templateUrl: 'partials/dropdown-select.tpl.html',
    link: function(scope, element, attrs, ngModel) {
      scope.states = DropdownService.getStates();
      console.log(scope.states);

      scope.attachToModel = function() {
        ngModel.$setViewValue(scope.selectedState);
        console.log(ngModel.$viewValue);
        ngModel.$render();
      }

    }
  }
}]);