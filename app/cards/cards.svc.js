(function () {
  'use strict';

  angular
    .module('mtg-app.cards')
    .factory('CardsService', function ($http) {
      var baseUrl = 'https://api.deckbrew.com/mtg/cards';

      return {
        getCards: getCards,
        getCard: getCard,
        searchCards: search
      };

      function getCards(params) {
        var params = params || {};
        return $http.get(baseUrl, {params: params});
      }

      function getCard(id) {
        return $http.get(baseUrl + '/' + id);
      }
      function search(query) {
        return $http.get(baseUrl + '/typeahead', {params: {q: query}})
      }



    });
})();
