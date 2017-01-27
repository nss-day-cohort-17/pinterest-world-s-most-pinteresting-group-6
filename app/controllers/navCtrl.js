
app.controller("navCtrl", function($scope, $q, $location) {

    $scope.logout = function() {
        return $q.resolve(firebase.auth().signOut())
        .then(()=>{
            $location.url('/')
        })

    }
});
