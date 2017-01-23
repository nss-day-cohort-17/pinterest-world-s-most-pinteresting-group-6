const app = angular.module('scrapHeap', ['ngRoute'])

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'loginCtrl',
      templateUrl: 'app/partials/login.html'
    })
      .when('/personal', {
      controller: 'personalCtrl',
      templateUrl: 'app/partials/personal.html'
    })
      .when('/search', {
      controller: 'searchCtrl',
      templateUrl: 'app/partials/search.html'
    })
    .otherwise ({
        redirectTo: '/'
      })
})
