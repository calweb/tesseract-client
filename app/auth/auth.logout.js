angular.module('mtg-app.auth')
  .controller('LogoutCtrl', function($auth) {
    if (!$auth.isAuthenticated()) {
      return;
    }
    $auth.logout()
      .then(function() {
        localStorage.removeItem('userRole');
        // $alert({
        //   content: 'You have been logged out',
        //   animation: 'fadeZoomFadeDown',
        //   type: 'material',
        //   duration: 3
        // });
      });
  });
