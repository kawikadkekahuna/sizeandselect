SERVER = 'http://localhost:3000';

angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('registration',{
      url:'/registration',
      templateUrl:'partials/registration.html',
      controller:'RegistrationController'
    })

    .state('login',{
      url:'/login',
      templateUrl:'partials/login.html',
      controller:'LoginController'
    });

  $urlRouterProvider.otherwise('/registration');

});