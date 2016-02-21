angular.module('app')

.directive('flipclock', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).FlipClock(scope.$eval(attrs.flipclock));
        }
    }
});