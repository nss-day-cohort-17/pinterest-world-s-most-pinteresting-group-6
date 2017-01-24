
app.controller("NavBarCtrl", function($scope, $window) {

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            $scope.loggedIn = true;
            $window.location.href = "#/view";
        } else {
            $scope.loggedIn = false;
        }
        $scope.$apply();
    });
