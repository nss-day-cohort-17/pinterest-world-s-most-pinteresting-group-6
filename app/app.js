const app = angular.module('scrapHeap', ['ngRoute', 'ngMaterial'])

app.config(function ($routeProvider) {

  //Initialize Firebase
  firebase.initializeApp({
      apiKey: "AIzaSyAdwMhu7PbaHYWB29WN9q9a26soPk2vEAQ",
      authDomain: "worlds-most-pinteresting-group.firebaseapp.com",
      databaseURL: "https://worlds-most-pinteresting-group.firebaseio.com",
      storageBucket: "worlds-most-pinteresting-group.appspot.com",
      messagingSenderId: "319190053501"
  });

  const userStatus = {
      authState:function ($location){
          console.log("hey");
          const unsubscribe = firebase.auth().onAuthStateChanged(user =>{
              unsubscribe()
              console.log("userStatus", user);
              if (!user){
                  $location.url('/')
              }
          })
      }
  }

  $routeProvider
    .when('/', {
      controller: 'loginCtrl',
      templateUrl: 'app/partials/login.html'
    })
      .when('/personal', {
      controller : 'personalCtrl',
      templateUrl : 'app/partials/personal.html',
      resolve : userStatus
    })
      .when('/search', {
      controller: 'searchCtrl',
      templateUrl: 'app/partials/search.html',
      resolve : userStatus
    })
      .when('/register', {
      controller: 'registerCtrl',
      templateUrl: 'app/partials/register.html',
    })
    .when('/personal/:someVarible',{
        controller: 'binDetailCtrl',
        templateUrl: 'app/partials/binDetail.html',
        resolve : userStatus
    })
    .otherwise ({
        redirectTo: '/'
    })
})
