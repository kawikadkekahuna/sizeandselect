angular.module('app')

.directive('compareTo', function () {

  return {
    require: 'ngModel',
    scope: {
      otherModelValue: '=compareTo'
    },

    link: function(scope, element, attrs, ngModel) {
      console.log('compare to directive linked ');

      ngModel.$validators.compareTo = function (modelValue) {
        console.log('modelValue', modelValue);
        console.log(modelValue === scope.otherModelValue)
        return modelValue === scope.otherModelValue;
      }

      scope.$watch('otherModelValue', function () {
        console.log('otherModelValue')
        ngModel.$validate();
      });

    }
  }
});


