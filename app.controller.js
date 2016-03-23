angular
  .module('wangular')
  .controller('HomeController', function($scope) {

  })
  .controller('NewQuoteController', function($scope,NewQuoteService) {
    $scope.quote = 'Allow me to inspire you';

    // $scope.img = 'http://www.placecage.com/200/300'


    $scope.getQuoteCtrl = function(quote) {
      console.log('HEy!', quote);
      NewQuoteService.getQuote(quote)
        .then(function(data) {
          console.log(data);
          window.quote = data;
          $scope.quote=data.data.toString();


          // $scope.temperature = NewWeatherService.changeKelvinToFarenheit(data.data.main.temp);
          // $scope.wind = data.data.wind.speed;
          // $scope.sky = data.data.weather[0].description;
          // $scope.humidity = data.data.main.humidity;

            // $scope.img = "http://cdn.playbuzz.com/cdn/173e8dc2-5516-41c1-8e34-43bf6f03b6d8/3b0aa0d7-527b-4983-8000-a3c91eb7dded.jpg";

        });
    }

  })
  // .controller('OldWeatherController', function() {
  //
  // })
