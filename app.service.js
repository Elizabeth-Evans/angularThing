angular
  .module('randomRon')
  .service('NewQuoteService', function($http) {

    function getQuote(quote) {
      // Ron Swanson Quote api
      return $http.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    }

    return {
      getQuote: getQuote
    }
  })
