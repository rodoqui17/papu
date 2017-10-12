angular
.module('pruebaApp', [])
.controller('pruebaAppCtrl', function($scope){
var today = new Date();
console.log("hola")
$scope.prop="hidden";
$scope.buscador="visible";
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

$scope.buscar = function(){
$scope.datainfo=[{costo:"40",tipocosto:"sesión",link:"mpinto",nombre:"Mabel Pinto",especialidad:"Parvularia",imag:"img/mabel.jpg",calificacion:"5"},{costo:"30",tipocosto:"hora",link:"mpinto",nombre:"Rodrigo Quiroz",especialidad:"Enfermero",imag:"img/rodrigo.jpg",calificacion:"5"},{costo:"50",tipocosto:"hora",link:"rquiroz",nombre:"Javier Soliz",especialidad:"Cuidador",imag:"img/javier.jpg",calificacion:"10"},{costo:"60",tipocosto:"sesión",link:"mpinto", nombre:"Juana Azurduy",especialidad:"Fisioterapeuta",imag:"img/juana.jpg",calificacion:"7"}];
console.log($scope.datainfo.length)
 $scope.nombre="mabel Pinto";
  var today = new Date();
var dd = today.getDate();
  $scope.hoy = dd;
  $scope.prop="visible";
  $scope.buscador="hidden";
  }
$scope.anio=yyyy;

function marcadia(){
  console.log("data");
  var today = new Date();
var dd = today.getDate();
  $scope.hoy = dd;

}


function validar(desc){
console.log(desc);
}


function daysInMonth(humanMonth, year) {
  return new Date(year || new Date().getFullYear(), humanMonth, 0).getDate();
}

var array = [2, 5, 9];
var index = 
// index es 0
index = array.indexOf(7);

var dias = daysInMonth(mm, yyyy); // 28

            var arr = new Array();
            for (h = 1; h<dias+1; h++){
                 arr.push(h);
              }
          $scope.dias=arr;

  var arr = new Array();
            for (h = 1; h<dias+1; h++){
                 arr.push(h);
              }
          $scope.dia=arr.indexOf(dd);


daysInMonth(2, 2008);
if (mm == 8){
$scope.mes = "Agosto";	
} 

$scope.img="familia.png";
$scope.personas="Cantidad";
$scope.reservar = function(servicio){
	$scope.diainicio=servicio;
	$scope.nom=nombre;
	
}
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
$scope.validar = function (diai,diaf,horai,horaf,zona,ninio,esp,desc) {
	if(diai==null||diaf==null||horai==null||horai==null||zona==null||ninio==null||esp==null||desc==null){
		$scope.result='los campos no deben esar vacios';
		}

}

$scope.reservardeposito = function(forma){
	if(forma=="Giro Tigo Money"){
		console.log("pago")
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