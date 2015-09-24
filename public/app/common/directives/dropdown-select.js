angular.module('app')

.directive('dropdownSelect', function() {
  return {
    restrict: 'E',
    require: 'ngModel',
    controller: 'RegistrationController as dropdownSelect',
    templateUrl: 'partials/dropdown-select.tpl.html',
    link: function(scope, element, attrs, ngModel) {

      scope.attachToModel = function() {
        ngModel.$setViewValue(scope.selectedState); 
        console.log(ngModel.$viewValue);       
        ngModel.$render();
      }
      
    }
  }
})