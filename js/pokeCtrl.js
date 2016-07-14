angular.module('pokedex')
  .controller('pokeCtrl', function ($scope, pokeServ) {

    $scope.pokeData = function(num) {
      pokeServ.getPokemon(num).then(function(response){
        console.log(response);

        $scope.pokePic = response.sprites.front_shiny;
        $scope.pokeType = response.types[0].type.name;
        $scope.pokeName = response.name;
        $scope.pokeId = response.id;
        //$scope.moves = response.moves;
        $scope.height = response.height;
        $scope.weight = response.weight;
        $scope.exp = response.base_experience

      });
    };
  });
