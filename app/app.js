(function () {
  'use strict';

  angular
    .module('mtg-app', [
      'ngRoute',
      'mtg-app.cards'
    ])
    .config(function ($routeProvider) {
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

    })
    .controller('MainCtrl', function ($scope) {
      $scope.message = "Welcome to my app!";
    });

})();
