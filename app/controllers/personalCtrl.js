app.controller('personalCtrl', function($scope, firebaseFactory){

    console.log("personal");

    firebaseFactory
    .getFirebase()
    .then((res)=>{
        console.log("control res", res.scraps);
        $scope.bins = res.bins;
        $scope.scraps = res.scraps
    })

})
