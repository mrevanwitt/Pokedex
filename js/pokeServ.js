angular.module('pokedex')
  .service('pokeServ', function ($http) {

    //http://pokeapi.co/api/v2/
    this.getPokemon = function (num) {
      return $http({
        method: 'GET',
        url: 'http://pokeapi.co/api/v2/pokemon/' + num + '/'
      }).then(function(response){
        console.log(response);
        return response.data;
      });
    };
  });
