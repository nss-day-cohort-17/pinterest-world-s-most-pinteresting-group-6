app.controller('binDetailCtrl', function($scope, $routeParams, firebaseFactory){
    $scope.key = $routeParams.someVarible
    
    firebaseFactory
    .getFirebaseScraps()
    .then((res)=>{
        $scope.scraps = res;
    })
})
