angular.module('mtg-app.auth')
  .controller('LoginCtrl', function($scope, $auth, $location) {
    $scope.login = function() {
      $auth.login($scope.user)
        .then(function(res) {
          console.log(res);
          localStorage.setItem('userRole', res.data.role);
          // redirect to dashboard
          console.log("go to cards");
          $location.path('/');
          // $alert({
          //   content: 'You have successfully logged in',
          //   animation: 'fadeZoomFadeDown',
          //   type: 'material',
          //   duration: 3
          // });
        })
        .catch(function(response) {
          // $alert({
          //   content: response.data.message,
          //   animation: 'fadeZoomFadeDown',
          //   type: 'material',
          //   duration: 3
          // });
        });
    };
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function(res) {
          console.log(res.data);

          // $alert({
          //   content: 'You have successfully logged in',
          //   animation: 'fadeZoomFadeDown',
          //   type: 'material',
          //   duration: 3
          // });
        })
        .catch(function(response) {
          // $alert({
          //   content: response.data ? response.data.message : response,
          //   animation: 'fadeZoomFadeDown',
          //   type: 'material',
          //   duration: 3
          // });
        });
    };
  });
