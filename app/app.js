const app = angular.module('scrapHeap', ['ngRoute', 'ngMaterial'])

//Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyAdwMhu7PbaHYWB29WN9q9a26soPk2vEAQ",
    authDomain: "worlds-most-pinteresting-group.firebaseapp.com",
    databaseURL: "https://worlds-most-pinteresting-group.firebaseio.com",
    storageBucket: "worlds-most-pinteresting-group.appspot.com",
    messagingSenderId: "319190053501"
});


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
      .when('/register', {
      controller: 'registerCtrl',
      templateUrl: 'app/partials/register.html'
    })
    .otherwise ({
        redirectTo: '/'
      })
})
