/*
	SCRIPTS PARA LA INTERFAZ
*/
console.log('interfaz.js mounted');


var $funcionId = $('#funcion_01');

$funcionId.on('click', function(e){
console.log('clicked');
	$(this).toggleClass("active");
	e.preventDefault();
});
