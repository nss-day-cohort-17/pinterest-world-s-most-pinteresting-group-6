app.controller('searchCtrl', function($scope, $mdDialog, firebaseFactory) {
    console.log("search");

  firebaseFactory
    .getFirebaseScraps()
    .then((res)=>{
      console.log(" control res", res);
      $scope.scraps = res
    })

// __________show dialog boxes on click__________
  $scope.status = '  ';
  $scope.customFullscreen = false;

  $scope.showDialog = function(ev) {
    console.log(ev.path[0].currentSrc);
    // targeting specific img and title for clicked card
    $scope.dialogImg = ev.path[0].currentSrc;
    $scope.dialogTitle = ev.path[2].textContent;
    console.log(ev);
    // dialog properties
    $mdDialog.show({
      controller: dialogController,
      templateUrl: 'app/partials/dialog.html',
      parent: angular.element(document.body),
      scope: $scope,
      preserveScope: true,
      targetEvent: ev,
      clickOutsideToClose:true,
      disableParentScroll: true,
      fullscreen: $scope.customFullscreen,
    });
  };

  function dialogController($scope, $mdDialog) {

    $scope.hide = function() {
      $mdDialog.hide();
    }
    $scope.cancel = function() {
      $mdDialog.cancel();
    }
    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    }
  }


})
