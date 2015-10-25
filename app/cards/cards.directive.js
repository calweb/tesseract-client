(function () {
  'use strict';

  angular
    .module('mtg-app.cards')
    .directive('mtgCard', function () {
      return {
        restrict: 'E',
        templateUrl: 'cards/views/card.tmpl.html',
        scope: {
          card: '='
        }
      };
    });
})();
