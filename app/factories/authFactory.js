app.factory('authFactory', ($q, $http) => {
    return {
      login (email, pass) {
        return $q.resolve(firebase.auth().signInWithEmailAndPassword(email, pass))
      },
      getUserId(){
        return firebase.auth().currentUser.uid
      },
      register(user){
        console.log("user", user);

          firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        //   .then(() => {
        //       setUser
        //   })
      }
    }
})
