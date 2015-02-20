angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state, Auth) {
  // Form data for the login modal
  $scope.loginData = {};  

  $scope.logout = function() {
    Auth.logout();
    $state.go("login");
  };


   // Perform the login action when the user submits the login form
  $scope.doLogin = function() {

    if(!angular.isDefined($scope.loginData.username) || !angular.isDefined($scope.loginData.password) || $scope.loginData.username.trim() == "" || $scope.loginData.password.trim() == ""){
       alert("Enter both user name and password");
       return;
    }  

    Auth.setUser({
      username: $scope.loginData.username
    });

    $state.go("app.playlists");
    
  };

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
