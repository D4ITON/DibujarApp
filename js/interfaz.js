/*
	SCRIPTS PARA LA INTERFAZ
*/
console.log('interfaz.js mounted');

var activado = false; // significa el estado de la herramienta
var $funcionId = $("#funcion_01");

$funcionId.on('click', function(e){
console.log('clicked');
	$(this).toggleClass("active");
	e.preventDefault();
});

/*  */

// variables
  var mouse = document.getElementById('funcion_01');
  var trazo_aspero = document.getElementById('funcion_02');
  var trazo_fino = document.getElementById('funcion_03');
  var aerografo = document.getElementById('funcion_04');
  var texto = document.getElementById('funcion_05');
  var linea = document.getElementById('funcion_06');
  var circulo = document.getElementById('funcion_07');
  var guardar = document.getElementById('funcion_08');
  var rectangulo = document.getElementById('funcion_09');
  var limpiar_scren = document.getElementById('funcion_10');






