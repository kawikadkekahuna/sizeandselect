SERVER = 'http://localhost:3000';

angular.module('app', ['ui.router', 'ngMessages', 'ngStorage'])
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

  .state('forbidden', {
    url: '/forbidden',
    templateUrl: 'views/partials/forbidden.html'
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

  .state('reference-library',{
    url:'/reference-library',
    templateUrl: 'views/partials/reference-library.html',
    controller: 'ReferenceLibraryController'
  })

  .state('forgot-password', {
    url: '/forgot-password',
    templateUrl: 'views/partials/forgot-password.html',
    controller: 'ForgotPasswordController'
  });

  $urlRouterProvider.otherwise('/login');
  $locationProvider.html5Mode({enabled: true, requireBase: false});

  function isAuthenticated($q, $state, $timeout, $http, $location, $rootScope, $localStorage) {
    $http.defaults.headers.common['Bearer'] = $localStorage.token;
    var deferred = $q.defer();
    $http.get(SERVER +'/api/auth/isAuthenticated', $localStorage.token).success(function(user) {

      if (user.status === 200){
        deferred.resolve();
      }
      else {
        $rootScope.message = 'You need to log in.';
        deferred.reject();
        $state.go('forbidden');
      }
    });
    return deferred.promise;
  };

});
