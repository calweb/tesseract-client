(function () {
  'use strict';

  angular
    .module('mtg-app.cards')
    .controller('CardsCtrl', function ($scope, $routeParams, CardsService) {
      CardsService.getCards().then(function (cards) {
        $scope.cards = cards.data;
        // console.log(cards.data);
      });

    });
})();
