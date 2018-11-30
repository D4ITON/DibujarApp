/*
	@título   : Interfaz basada en "Adobe XD CC"
	@fecha    : 26.11.2018
	@tipo 	  : JavaScript
	@autor    : DALTHON
	@versión  : 0.0.5
	@curso    : CAD
*/

// variables
var mouse = $("#funcion_01");
var trazo_aspero = $("#funcion_02");
var trazo_fino = $("#funcion_03");
var aerografo = $("#funcion_04");
var texto = $("#funcion_05");
var linea = $("#funcion_06");
var circulo = $("#funcion_07");
// var guardar = $("#funcion_08");
var rectangulo = $("#funcion_08");
var limpiar_scren = $("#funcion_09");

var limpiar_scren_id = limpiar_scren.attr("id");
/* AGREGAR CLASE ACTIVE A LA FUNCION SELECCIONADA  */
var ultimo_seleccionado_id; // centinela que se usa para guardar el ultimo evento usado
var ultimo_seleccionado; // captura la ultima seleccion
var seleccionadas = []; // array que registra las funciones usadas

$(function (){
	$("#menu-left button").on("click", function(){
		
		ultimo_seleccionado = $(this);
		ultimo_seleccionado_id = $(this).attr("id");
		seleccionadas.push(ultimo_seleccionado);
		var delayInMilliseconds = 500; 
		console.log($(this).attr("id")); //retorna la funcion con su id

		/* QUITA LA CLASE A LOS OTRAS FUNCIONES Y SE QUEDA CON EL EL ULTIMO */
		$("button.active").removeClass('active');
		$(this).addClass('active');


		/* REGRESAR A LA PRIMERA FUNCIION LUEGO DE LIMPIAR PANTALLA  */
		/* HACER UN DELAY EN LA FUNCION */
		setTimeout(function(){

			if (ultimo_seleccionado_id==limpiar_scren_id) 
			{
				// console.log(seleccionadas[seleccionadas.length - 1]);
				// var penultimo_seleccionado = seleccionadas[seleccionadas.length - 2];
				$("button.active").removeClass('active');
				mouse.addClass('active');
			}

		}, delayInMilliseconds);

	});
});



/* DESCARGAR TODO LO QUE HAY EN EL CANVAS COMO IMAGEN */
var download = document.getElementById("download");

download.addEventListener("click", function() {
  var image = document.getElementById("canvas").toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
  download.setAttribute("href", image);
});
