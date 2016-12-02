var inventario = angular.module("Inventarios", ["ngRoute","ui.router"]);


inventario.config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
        $stateProvider.state('Inventario2', {
            views: {
                'area_inv2': {
                 templateUrl: './vistas/Entorno.html'
                },
                'barra_titulo': {
                 templateUrl: './vistas/Entorno.html'
                }

            }
        });





    }]);




inventario.config(function($routeProvider) {



    $routeProvider
    .when("/", {
        templateUrl : "vistas/Sesion.html"
    })
    .when("/Bienevenido", {
        templateUrl : "vistas/Entorno.html"
    });
});



inventario.controller("EntornoController2", function($scope,$state) { 

$scope.prueba2 = "esta es una prueba";

$scope.togo = function(direccion)
{
    alert(direccion)
$state.go(direccion);
}




});






