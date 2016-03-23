angular
  .module('wangular')
  .service('NewQuoteService', function($http) {

    function getQuote(quote) {
      return $http.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    }

    return {
      getQuote: getQuote
    }
  })
