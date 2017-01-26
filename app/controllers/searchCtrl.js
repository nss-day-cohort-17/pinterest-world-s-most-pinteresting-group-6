app.controller('searchCtrl', function($scope, $mdDialog, firebaseFactory) {
    console.log("search");

  firebaseFactory
    .getFirebaseScraps()
    .then((res)=>{
      console.log(" control res", res);
      $scope.scraps = res
    })

  $scope.saveScrap = function(event) {

    // console.log(event.path[1].children[2].innerText, 'hi')
    let keyId = event.path[1].children[2].innerText
    // firebaseFactory
    //   .postScrap(event)
    //   .then((res) => {
    //     console.log('scrap posted', res)
    //   })

  }


// __________show dialog boxes on click__________
  $scope.status = '  ';
  $scope.customFullscreen = false;

  $scope.showDialog = function(ev) {
    // targeting specific img and title for clicked card
    $scope.dialogImg = ev.path[0].currentSrc;
    $scope.dialogTitle = ev.path[2].children[0].innerText;
    $scope.scrapKey = ev.path[2].children[1].innerHTML;
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
