/*
	SCRIPTS PARA LA INTERFAZ
*/

// $funcionId.on('click', function(e){
// 	$(this).toggleClass("active");
// 	e.preventDefault();
// });

/*  */

// variables
var mouse = $("#funcion_01");
var trazo_aspero = $("#funcion_02");
var trazo_fino = $("#funcion_03");
var aerografo = $("#funcion_04");
var texto = $("#funcion_05");
var linea = $("#funcion_06");
var circulo = $("#funcion_07");
var guardar = $("#funcion_08");
var rectangulo = $("#funcion_09");
var limpiar_scren = $("#funcion_10");


// console.log(mouse);
// var operacion;

$(function (){
	$("#menu-left button").on("click", function(){
		$("button.active").removeClass('active');
		$(this).addClass('active');
	});
});

// $( function() {
//     $( "#button" ).on( "click", function() {
//       $( "#effect" ).toggleClass( "newClass", 1000 );
//     });
//   } );


// switch (operacion) {
//   case 01:
    
//     break;
//   default:
//     // statements_def
//     break;
// }

// function active(id)
// {
//   console.log(id);
// }

// $funcionId.on('click', function(e){
// console.log('clicked');
//   $(this).toggleClass("active");
//   e.preventDefault();
// });
