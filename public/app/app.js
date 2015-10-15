SERVER = 'http://localhost:3000' ;

angular.module('app', ['ui.router','ngMessages','ngStorage'])

.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
    .state('about-us', {
      url: '/about-us',
      templateUrl: 'partials/about-us.html',
      controller: 'AboutUsController'
    })

    .state('contact-us', {
      url: '/contact-us',
      templateUrl: 'partials/contact-us.html',
      controller: 'ContactUsController'
    })

    .state('error-messages', {
      url: '/error-messages',
      templateUrl: 'partials/error-messages.html'
    })

    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'partials/dashboard.html',
      controller: 'DashboardController'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html',
      controller: 'LoginController'
    })

    .state('messages', {
      url: '/messages',
      templateUrl: 'partials/messages.html',
      controller: 'MessagesController'
    })

    .state('profile', {
      url: '/profile',
      templateUrl: 'partials/profile.html',
      controller: 'ProfileController'
    })

    .state('project', {
      url: '/project',
      templateUrl: 'partials/project.html',
      controller: 'ProjectController'
    })

    .state('registration', {
      url: '/registration',
      templateUrl: 'partials/registration.html',
      controller: 'RegistrationController'
    })

    .state('resources', {
      url: '/resources',
      templateUrl: 'partials/resources.html',
      controller: 'ResourcesController'
    });

  $urlRouterProvider.otherwise('/login');

})
.run(function ($rootScope, $location, $state, $localStorage){
  $rootScope.$on('$stateChangeStart', function (event, next, current){
    console.log($localStorage.SESSION);
    if( !$localStorage.SESSION ){
      console.log('user not logged in. redirect');
      $location.path('/login');
      next.templateUrl = '../partials/login.html';
    }else{
      console.log('user okay. let em through boys');
      return;
    }
  });
})