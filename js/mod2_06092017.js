angular
.module('pruebaApp', [])
.controller('pruebaAppCtrl', function($scope, $http){
var today = new Date();
var dd = today.getDate();
$scope.dd=dd;
$scope.meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
$scope.servicios=['Cuidado de Niños','Cuidado de Adultos','Cuidado de Mascotas','Cuidado del Hogar'];

var mm = today.getMonth(); //January is 0!
$scope.mm=mm;

var hora = today.getHours();
$scope.hora=hora;

var yyyy = today.getFullYear();
$scope.datadia = function(){
  var today = new Date();
var dd = today.getDate();
  $scope.hoy = dd;
}
$scope.anio=yyyy;
function marcadia(){
  var today = new Date();
var dd = today.getDate();
  $scope.hoy = dd;
}
function daysInMonth(humanMonth, year) {
  return new Date(year || new Date().getFullYear(), humanMonth, 0).getDate();
}

var array = [2, 5, 9];
var index = 0;
// index es 0
index = array.indexOf(7);

var dias = daysInMonth(mm, yyyy); // 28

            var arr = new Array();
            for (h = 0; h<dias+1; h++){
                 arr.push(h);
              }
          $scope.dias=arr;

  var arr = new Array();
            for (h = 1; h<dias+1; h++){
                 arr.push(h);
              }
          $scope.dia=arr.indexOf(dd);


var horas = new Array();
			for(i=0; i < 24; i++){
				horas.push(i);
				$scope.hh=horas;
				
			}

daysInMonth(2, 2008);


//function guardarDatos(){
// localStorage.nombre = document.getElementById("nombre").value;
// localStorage.password = document.getElementById("password").value;
//}
// 
//function recuperarDatos(){
// if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
//  document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + "<br/> Password: " + localStorage.password;
// }
// else{
//  document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
// }
//}


$scope.reservar = function (forma,servicios,dias,meses,hora,zona,direccion,desc){
	var data = {
forma: forma,
servicios: servicios
};

$http({
            method: 'GET',
            url: '/consultas',
            params: {
                forma: forma,
				servicios: servicios
                
            }
        }).success(function(data) {
        
       console.log(data);



      window.location='/cuidadores/';
       
     
       
         }).
        error(function() {
            console.log('Error al intentar recuperar la información.');
        });
      

	console.log("los datos son: "+forma+servicios+dias+meses+hora+zona+direccion+desc);
	

}; 

$scope.img="familia.png";
$scope.personas="Cantidad";
$scope.especialidad =function(servicio){
if(servicio==="Cuidado de Niños"){
	$scope.nn=['Ninguna','Cuidados Especiales','Fisioterapia infantil'];
	$scope.img="icons8-Baby-100.png";
	$scope.personas="Cuantos niños";
}
if(servicio==="Cuidado de Adultos"){
	$scope.nn=['Ninguna','Fisioterapia','Acompañamiento','Cuidados de Salud'];
	$scope.img="icons8-Old Woman-100.png";
	$scope.personas="Cuantos adultos";
}
if(servicio==="Cuidado de Mascotas"){
	$scope.nn=['Ninguna','Paseo','Masajes','Alimentación'];
$scope.img="icons8-Dog-100.png";
$scope.personas="Cuantas mascotas";

}
if(servicio==="Cuidado Personal"){
	$scope.nn=['Ninguna','Fisioterapia','Corte','Manicura'];
	$scope.personas="Cuantas Personas";
}
};

$scope.pago = function(forma){
	if(forma==="Giro Tigo Money"){
		console.log("pago")
		$scope.mensajepago="Giro Tigo Money, al 72565853"
	}
	
	if(forma==="Deposito Bancario"){
	
		$scope.mensajepago="Depositos a la cuenta, 1400-001-13214654 del Banco Mercantil Santa Cruz"
	}
	
	if(forma==="Pago en Efectivo"){
		$scope.mensajepago="Dirección Av. Santos Dumond #3043 La Paz - Bolivia"
	}
};

});