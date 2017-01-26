app.controller('personalCtrl', function($scope, firebaseFactory){
    console.log("personal");
    firebaseFactory
    .getFirebaseBins()
    .then((res)=>{
        console.log("control res", res);
        $scope.bins = res;
        //$scope.scraps = res

    })


})
