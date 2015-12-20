SERVER = 'http://localhost:3000';

angular.module('app', ['ui.router', 'ngMessages', 'ngStorage'])
.run(function ($sessionStorage){
  $sessionStorage.SizeSelect = {};
  $sessionStorage.SizeSelect.CURRENT_MODAL = 'CURRENT_MODAL';

})
.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  $stateProvider
  .state('about-us', {
    url: '/about-us',
    templateUrl: 'views/resources/about-us.html',
    controller: 'AboutUsController'
  })

  .state('contact-us', {
    url: '/contact-us',
    templateUrl: 'views/resources/contact-us.html',
    controller: 'ContactUsController'
  })

  .state('dashboard', {
    url: '/dashboard',
    resolve:{
      authenticate: isAuthenticated
    },
    templateUrl: 'views/user/dashboard.html',
    controller: 'DashboardController'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'views/auth/login.html',
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
    templateUrl: 'views/resources/forbidden.html'
  })

  .state('project', {
    url: '/project',
    templateUrl: 'views/project/project.html',
    controller: 'ProjectController'
  })

  .state('registration', {
    url: '/register',
    templateUrl: 'views/auth/registration.html',
    controller: 'AuthorizationController'
  })

  .state('reference-library',{
    url:'/reference-library',
    templateUrl: 'views/resources/reference-library.html',
    controller: 'ReferenceLibraryController'
  })

  .state('forgot-password', {
    url: '/forgot-password',
    templateUrl: 'views/auth/forgot-password.html',
    controller: 'ForgotPasswordController'
  })

  .state('reset-password', {
    url: '/reset-password',
    templateUrl: 'views/auth/reset-password.html'
    // controller: 'ForgotPasswordController'
  })

  .state('modal', {
    templateUrl: 'views/modal/modal.html'
  });

  $urlRouterProvider.otherwise('/login');
  $locationProvider.html5Mode({enabled: true, requireBase: false});

  function isAuthenticated($q, $state, $timeout, $http, $location, $rootScope, $localStorage) {
    $http.defaults.headers.common['Authorization'] = $localStorage.token;
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
