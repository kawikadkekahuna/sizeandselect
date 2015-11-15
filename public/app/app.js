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

.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    
    $stateProvider
      .state('about-us', {
        url: '/about-us',
        templateUrl: 'views/partials/about-us.html',
        controller: 'AboutUsController'
      })

    .state('contact-us', {
      url: '/contact-us',
      templateUrl: 'views/partials/contact-us.html',
      controller: 'ContactUsController'
    })

    .state('dashboard', {
      url: '/dashboard',
      resolve:{
        authenticate: isAuthenticated
      },
      templateUrl: 'views/partials/dashboard.html',
      controller: 'DashboardController'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'views/sections/login.html',
      controller: 'AuthorizationController'
    })

    .state('messages', {
      url: '/messages',
      templateUrl: 'views/partials/messages.html',
      controller: 'MessagesController'
    })

    .state('profile', {
      url: '/profile',
      templateUrl: 'views/partials/profile.html',
      controller: 'ProfileController'
    })

    .state('project', {
      url: '/project',
      templateUrl: 'views/partials/project.html',
      controller: 'ProjectController'
    })

    .state('registration', {
      url: '/register',
      templateUrl: 'views/partials/registration.html',
      controller: 'RegistrationController'
    })

    .state('forgot-password', {
      url: '/forgot-password',
      templateUrl: 'views/partials/forgot-password.html',
      controller: 'ForgotPasswordController'
    });

    $urlRouterProvider.otherwise('/login');
    $locationProvider.html5Mode({enabled: true, requireBase: false});

    function isAuthenticated($q, $timeout, $http, $location, $rootScope, $localStorage) {
      $http.defaults.headers.common['Bearer'] = $localStorage.token;
      var deferred = $q.defer();
      console.log('token', $localStorage.token); 
      $http.get(SERVER +'/api/auth/isAuthenticated', $localStorage.token).success(function(user) {

        if (user.status === 200){
          deferred.resolve();
        }
        else {
          $rootScope.message = 'You need to log in.';
          deferred.reject();
          $location.url('/login');
        }
      });
      return deferred.promise;
    };

  })
