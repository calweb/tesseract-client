(function () { 'use strict';

  (function () {
    'use strict';

    angular
      .module('mtg-app', [
        'ngRoute',
        'ngAria',
        'ngMaterial',
        'mtg-app.cards'
      ])
      .config(function ($routeProvider, $mdThemingProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'main.html',
            controller: 'MainCtrl'
          })
          .when('/404', {
            template: '<h1>Sorry, page not found.</h1>'
          })
          .otherwise({
            redirectTo: '/404'
          });

          $mdThemingProvider.theme('default')
            .primaryPalette('pink')
            // .accentPalette('orange');

      })
      .controller('MainCtrl', function ($scope) {
        $scope.message = "Tesseract";
      });

  })();

})();
//# sourceMappingURL=app.js.map
