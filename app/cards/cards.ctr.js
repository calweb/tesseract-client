(function () {
  'use strict';


  angular
    .module('mtg-app.cards')
    .controller('CardsCtrl', function ($scope, $routeParams, CardsService) {
      CardsService.getCards().then(function (cards) {
        $scope.cards = cards.data;
        // console.log(cards.data);
      });
      $scope.alertMe = function (text) {
        alert(text);
      };
      $scope.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };
      $scope.searchResults = [];
      $scope.cardResults = _.debounce(function (query) {
        CardsService.searchCards(query).then(function (cards) {
          $scope.searchResults = cards.data;
        });
      }, 500);

    });
})();
