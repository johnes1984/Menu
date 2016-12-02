var menu = angular.module("MenuPrincipal", ["ngRoute","ui.router","Inventarios"]);


menu.config(['$locationProvider', '$stateProvider', function ($locationProvider, $stateProvider) {
        $stateProvider.state('Inventario', {
            views: {
                'areadetrabajo': {
                 templateUrl: 'vistas/Inventario.html'
                },
                'barra_titulo': {
                 templateUrl: 'vistas/Ventana.html'
                }

            }
        });

 		$stateProvider.state('Entorno', {
            url: 'vistas/Entorno.html',
             views: {
                'header': {
                 templateUrl: './vistas/Sesion.html'
                },
                'content': {
                 templateUrl: './vistas/Sesion.html'
                }
            }
        });




    }]);


menu.config(function($routeProvider) {



    $routeProvider
    .when("/", {
        templateUrl : "vistas/Sesion.html"
    })
    .when("/Bienevenido", {
        templateUrl : "vistas/Entorno.html"
    });
});




menu.controller("Login", function($scope,$location) { 








$scope.IniciarSesion = function(Usuario)
{
	 $location.path("/Bienevenido");
}


});



menu.controller("EntornoController", function($scope,$state) { 


$scope.togo = function(direccion)
{
$state.go(direccion);
}






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






