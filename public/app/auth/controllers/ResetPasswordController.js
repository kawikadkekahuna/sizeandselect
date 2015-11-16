angular.module('app')

.controller('ResetPasswordController', function ($scope){
    console.log("forgot password controller");
    $scope.header = {name: 'header', url :'views/partials/navigation.html'};
});