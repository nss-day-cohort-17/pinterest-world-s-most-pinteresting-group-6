app.factory('authFactory', function($q){
  return {
    login (email, pass) {
      // converts native promise to angular $q promise
      return $q.resolve(firebase.auth().signInWithEmailAndPassword(email, pass))
    }
  }
})
