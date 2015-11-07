(function () { 'use strict';
    angular
      .module('mtg-app', [
        'ngRoute',
        'ngAria',
        'ngMaterial',
        'lodash',
        'mtg-app.auth',
        'mtg-app.cards'
      ])
      .config(function ($routeProvider, $mdThemingProvider, $authProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'main.html',
            controller: 'MainCtrl',
            resolve: {
              authenticated: function($q, $location, $auth) {
                var deferred = $q.defer();

                if (!$auth.isAuthenticated()) {
                  $location.path('/login');
                } else {
                  deferred.resolve();
                }

                return deferred.promise;
              }
            }
          })
          .when('/404', {
            template: '<h1>Sorry, page not found.</h1>'
          })
          .otherwise({
            redirectTo: '/404'
          });

          $mdThemingProvider.theme('default')
            .primaryPalette('pink')
            .accentPalette('orange');

      })
      .controller('MainCtrl', function ($scope) {
        $scope.message = "Tesseract";
      });
  angular
    .module('lodash', [])
    .factory('_', function ($window) {
      return $window._;
    })
})();
//# sourceMappingURL=app.js.map
