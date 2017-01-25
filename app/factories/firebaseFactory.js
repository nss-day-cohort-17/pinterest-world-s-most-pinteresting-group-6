app.factory('firebaseFactory', function($http, $q){

    return{
        getFirebaseBins(){
            return $http
                .get('https://worlds-most-pinteresting-group.firebaseio.com/bins.json')
                .then((res)=>{
                    console.log("factory res", res);
                    return res.data
                })
        },
        getFirebaseScraps(){
            return $http
                .get('https://worlds-most-pinteresting-group.firebaseio.com/scraps.json')
                .then((res)=>{
                    console.log("factory res", res);
                    return res.data
            })
        },
        getFirebaseUsers(){
            return $http
                .get('https://worlds-most-pinteresting-group.firebaseio.com/users.json')
                .then((res)=>{
                    console.log("factory res", res);
                    return res.data
            })
        }

    }
})
