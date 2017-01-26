
app.controller("NavBarCtrl", function($scope, $window, authFactory) {

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            $scope.loggedIn = true;
            $window.location.href = "app/partials/personal.html";
        } else {
            $scope.loggedIn = false;
        }
        $scope.$apply();
    });

    $scope.logout = function() {
        authFactory.logoutUser(authFactory.getUser());
        $window.location.href = "app/partials/login.html";
    };

});
