app.controller('registerCtrl', function($scope, authFactory) {
    console.log('registerCtrl')
    $scope.register = function () {
        console.log('start register')

        authFactory
        .register($scope.user)
        // .then((res)=>{
        //     console.log("res", res);
        // })
    }

})
