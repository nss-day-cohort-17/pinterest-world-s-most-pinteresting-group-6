app.factory('firebaseFactory', function($http){

    return{
        getFirebase(){
            return $http
            .get('https://worlds-most-pinteresting-group.firebaseio.com/.json')
            .then((res)=>{

                // console.log(" factory res", res);

                return res.data
            })
        }
    }
})
