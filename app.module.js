angular
  .module('wangular',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "templates/home.html",
        controller: 'HomeController'
      })
      .when('/quotes', {
        templateUrl: "templates/quotes.html",
        controller: "NewQuoteController"
      })
      // .when('/old-weather', {
      //   templateUrl: "templates/old-weather.html",
      //   controller: 'OldWeatherController'
      // })
  })
