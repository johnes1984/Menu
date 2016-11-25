var menu = angular.module("MenuPrincipal", ["ngRoute"]);





menu.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "vistas/Sesion.html"
    })
    .when("/Inventario", {
        templateUrl : "vistas/Inventario.html"
    })
    .when("/Bienevenido", {
        templateUrl : "vistas/Entorno.html"
    });
});




menu.controller("Login", function($scope,$location) { 




$scope.IniciarSesion = function(Usuario)
{


	 $location.path("/Inventario");

}


});



menu.controller("EntornoController", function($scope) { 

	$scope.Entornoactivo = 'Entorno_show';
$scope.botonInicio = true;

$scope.Inicio = function()
{

	if ($scope.botonInicio == true)
	{
	$scope.myVar = 'Inicio_hide';
	$scope.botonInicio = false;
	}
	else
	{
	$scope.myVar = 'Inicio_show';
	$scope.botonInicio = true;
	}
}


$scope.Inicio()


});






