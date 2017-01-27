
app.controller("navCtrl", function($scope, $window, authFactory) {

    // firebase.auth().onAuthStateChanged((user) => {
    //     if (user) {
    //         $scope.loggedIn = true;
    //         $window.location.href = "#!/";
    //     } else {
    //         $scope.loggedIn = false;
    //     }
    //     $scope.$apply();
    // });

    $scope.logout = function() {
        // authFactory.logoutUser(authFactory.getUser());
        // $window.location.href = "#!/personal";
    };

});
