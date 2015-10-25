(function () {
  'use strict';

  angular
    .module('mtg-app.cards', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/cards', {
          templateUrl: 'cards/views/list.html',
          controller: 'CardsCtrl'
        })
        .when('/cards/:cardId', {
          templateUrl: 'cards/views/show.html',
          controller: 'CardsCtrl'
        });
    });
})();
