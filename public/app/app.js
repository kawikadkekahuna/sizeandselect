SERVER = 'http://localhost:3000';

angular.module('app', ['ui.router', 'ngMessages', 'ngStorage', 'ngSanitize', 'MassAutoComplete'])
.run(function ($sessionStorage){
  $sessionStorage.SizeSelect = {};
  $sessionStorage.SizeSelect.CURRENT_MODAL = 'CURRENT_MODAL';

})
.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  $stateProvider
  .state('layout', {
    abstract: true,
    controller: 'GlobalController',
    controllerAs: 'global'
  })

  .state('home', {
    controller: 'HomeController',
    controllerAs: 'home',
    templateUrl: '/views/session/home.html', 
    url: '/'
  })

  // .state('layout', {
  //   abstract: true,
  //   controller: 'GlobalController',
  //   controllerAs: 'global'
  // })

  // .state('dashboard', {
  //   url: '/dashboard',
  //   resolve:{
  //     authenticate: isAuthenticated
  //   },
  //   templateUrl: '/views/user/dashboard.html',
  //   controller: 'DashboardController'
  // })

  // .state('home', {
  //   url:'/',
  //   templateUrl:'/views/user/home.html',
  //   controler: 'HomeController'
  // })

  // .state('profile', {
  //   url: '/profile',
  //   resolve:{
  //     authenticate: isAuthenticated
  //   },
  //   templateUrl: '/views/user/profile.html',
  //   controller: 'ProfileController'
  // })

  // .state('forbidden', {
  //   url: '/forbidden',
  //   templateUrl: '/views/resources/forbidden.html'
  // })

  // .state('project', {
  //   url: '/project/:projectId',
  //   resolve:{
  //     authenticate: isAuthenticated
  //   },    
  //   templateUrl: '/views/projects/project.html',
  //   controller: 'ProjectController'
  // })

  // .state('project.tag', {
  //   url: '/tag/:tagId',
  //   resolve:{
  //     authenticate: isAuthenticated
  //   },
  //   templateUrl: '/views/tag/tag-analytics-sheet.html',
  //   controller: 'TagController'
  // })

  // .state('registration', {
  //   url: '/register',
  //   templateUrl: '/views/auth/registration.html',
  //   controller: 'AuthorizationController'
  // })

  // .state('reference-library',{
  //   url:'/reference-library',
  //   templateUrl: '/views/resources/reference-library.html',
  //   controller: 'ReferenceLibraryController'
  // })

  // .state('forgot-password', {
  //   url: '/forgot-password',
  //   templateUrl: '/views/auth/forgot-password.html',
  //   controller: 'ForgotPasswordController'
  // })

  // .state('reset-password', {
  //   url: '/reset-password/:token',
  //   templateUrl: '/views/auth/reset-password.html',
  //   controller: 'ResetPasswordController'
  // })

  // .state('modal', {
  //   templateUrl: '/views/modal/modal.html'
  // });

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode({enabled: true, requireBase: false});

  function isAuthenticated($q, $state, $timeout, $http, $location, $rootScope, $localStorage, HelperFactory) {
    $http.defaults.headers.common['Authorization'] = $localStorage.token;
    var deferred = $q.defer();
    $http.get(SERVER +'/api/auth/isAuthenticated', $localStorage.token).success(function(user) {
      if (user.status === 200){
        $localStorage.authenticated = true;
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
