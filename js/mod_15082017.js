angular
.module('pruebaApp', [])
.controller('pruebaAppCtrl', function($scope){
$scope.nombre1="Rodrigo";
$scope.img="familia.png";
$scope.personas="Cantidad";
$scope.especialidad =function(servicio){
if(servicio=="Cuidado de Niños"){
	$scope.nn=['Ninguna','Cuidados Especiales','Fisioterapia infantil'];
	$scope.img="icons8-Baby-100.png";
	$scope.personas="Cuantos niños";
}
if(servicio=="Cuidado de Adultos"){
	$scope.nn=['Ninguna','Fisioterapia','Acompañamiento','Cuidados de Salud'];
	$scope.img="icons8-Old Woman-100.png";
	$scope.personas="Cuantos adultos";
}
if(servicio=="Cuidado de Mascotas"){
	$scope.nn=['Ninguna','Paseo','Masajes','Alimentación'];
$scope.img="icons8-Dog-100.png";
$scope.personas="Cuantas mascotas";

}
if(servicio=="Cuidado Personal"){
	$scope.nn=['Ninguna','Fisioterapia','Corte','Manicura'];
	$scope.personas="Cuantas Personas";
}
}
$scope.buscar = function (diai,diaf,horai,horaf,zona,ninio,esp,desc) {
	if(diai==null||diaf==null||horai==null||horai==null||zona==null||ninio==null||esp==null||desc==null){
		$scope.result='los campos no deben esar vacios';
		}

}

$scope.pago = function(forma){
	if(forma=="Giro Tigo Money"){
		
		$scope.mensajepago="Giro Tigo Money, al 72565853"
	}
	
	if(forma=="Deposito Bancario"){
	
		$scope.mensajepago="Depositos a la cuenta, 1400-001-13214654 del Banco Mercantil Santa Cruz"
	}
	
		if(forma=="Pago en Efectivo"){
		
		$scope.mensajepago="Dirección Av. Santos Dumond #3043 La Paz - Bolivia"
	}
}
// $scope.productos = [{"nombre":"Aceite","cantidad":"10 unidades","precio":"12 Bs."},{"nombre":"Azucar","cantidad":"1 quintal","precio":"1 Bs. por libra"},{"nombre":"Refresco","cantidad":"10 botellas","precio":"10 Bs."}]
// $scope.puntos = [{"puntuacion":"0","nombre":"Rodrigo"}];
// $scope.usuarios = [{nombre:"Rodrigo Quiroz","servicio":"Ingeniero","experiencia":"Trabajo en banco sol como operador de sistemas","telefono":"72565853","file":"http://www.faceboob.com/rodrigo.quiroz","imagen":"images/rodri.jpg","edad":"32","estado":"activo"},
// {"nombre":"Liz Saramani","servicio":"Fisioterapeuta","telefono":"75850234","imagen":"images/liz.jpg","edad":"26","estado":"inactivo",}];
// $scope.puntos = [];
// $scope.usuarios = [];
// $scope.usuarios = [nombre='';servicio='';telefono=''];
// $scope.vari = ["rodrigo","jose"];
// $scope.ele1 = $scope.puntos.puntuacion;


});