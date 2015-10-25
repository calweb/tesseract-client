(function () {
  'use strict';

  angular
    .module('mtg-app.cards')
    .factory('CardsService', function ($http) {
      var baseUrl = 'https://api.deckbrew.com/mtg/cards';

      return {
        getCards: getCards,
        getCard: getCard
      };

      function getCards(params) {
        var params = params || {};
        return $http.get(baseUrl, {params: params});
      }

      function getCard(id) {
        return $http.get(baseUrl + '/' + id);
      }



    });
})();
