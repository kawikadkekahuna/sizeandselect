SERVER = 'http://localhost:3000';

angular.module('app', ['ui.router', 'ngMessages', 'ngStorage'])
  .constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
  })

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
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
      resolve:{
        authenticate: isAuthenticated
      },
      templateUrl: 'partials/dashboard.html',
      controller: 'DashboardController'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html',
      controller: 'AuthorizationController'
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

    function isAuthenticated($q, $timeout, $http, $location, $rootScope, $localStorage) {
      $http.defaults.headers.common['Bearer'] = $localStorage.token;
      var deferred = $q.defer();
      $http.get(SERVER +'/api/auth/isAuthenticated', $localStorage.token).success(function(user) {
        if (user !== '0') deferred.resolve();
        else {
          $rootScope.message = 'You need to log in.';
          deferred.reject();
          $location.url('/login');
        }
      });
      return deferred.promise;
    };

  })
  .run(function($rootScope, $location, $state, $localStorage, $q, $http) {

  })