app.controller('binDetailCtrl', function($scope, $routeParams, firebaseFactory){
    console.log("1234", 1234);
    $scope.key = $routeParams.someVarible
    console.log("$scope.key", $scope.key);

    firebaseFactory
    .getFirebaseScraps()
    .then((res)=>{
        console.log("control res", res);
        $scope.scraps = res;
        //$scope.scraps = res

    })
})
