(function () {
  'use strict';


  angular
    .module('mtg-app.cards')
    .controller('CardsCtrl', function ($scope, $routeParams, CardsService) {
      // CardsService.getLocal().then(function (data) {
      //   console.log(data.data);
      // });
      CardsService.getCards().then(function (cards) {
        $scope.cards = cards;
        console.log(cards);
      });
      $scope.alertMe = function (text) {
        alert(text);
      };
      $scope.addCard = function (card ) {
        CardsService.addCard(card);
      };
      $scope.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };
      $scope.searchResults = [];
      $scope.cardResults = _.debounce(function (query) {
        CardsService.searchCards(query).then(function (cards) {
          $scope.searchResults = cards;
        });
      }, 500);

    });
})();
