app.controller('loginCtrl', function ($scope, $location, authFactory) {
    $scope.login = () => authFactory
      .login($scope.email, $scope.password)
      .then(() => $location.url('/'))
})
