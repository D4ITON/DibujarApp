
// variables
var mouse = $("#funcion_01");
var limpiar_scren = $("#funcion_limpiar");

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
				$("button.active").removeClass('active');
				mouse.addClass('active');
			}

		}, delayInMilliseconds);

	});
	limpiar_scren.on("click", function(){
		limpiar_pantalla();
	});
});



/* DESCARGAR TODO LO QUE HAY EN EL CANVAS COMO IMAGEN */
var download = document.getElementById("download");

download.addEventListener("click", function() {
  var image = document.getElementById("canvas").toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
  download.setAttribute("href", image);
});


// USANDO TABS MOSTRAR SOLO TITULOS DE LA FUNCION ACTIVA 
(function(d){
	//querySelectorAll selecciona todos los elementos que coincidan con un elemento css es igual q el dolar de jquery
	// let tabs = d.querySelectorAll('.tabs__item'); //guardamos los tabs y paneles en variables pero no es array
	// let panels = d.querySelectorAll('.panels__item'); //guardamos los tabs y paneles en variables
	let tabs = Array.prototype.slice.apply(d.querySelectorAll('.tabs__item')); //convertidos a array
	let panels = Array.prototype.slice.apply(d.querySelectorAll('.panels__item')); 

	// estos no son array son NodeList
	// console.log(tabs);
	// console.log(panels);
	/* capturamos el click en los tabs */
	// se van a usar delegacion de eventos
	// se estan usando arroy funcion es igual que function(e){}, en este caso es e=>{} donde e es el evento
	d.getElementById('tabs').addEventListener('click', e => {
		// console.dir(e.target);
		// if(e.target.tagName == 'BUTTON'){console.log('boton');}
		if (e.target.classList.contains('tabs__item')) { //obtengo a todos los clicks dentro de la clase escrita
			// console.log(tabs.indexOf(e.target)); // como esta convertido a array, nos muestra su posicion
			let i = tabs.indexOf(e.target);
			tabs.map(tab => tab.classList.remove('active'));
			tabs[i].classList.add('active');

			panels.map(panel => panel.classList.remove('active'));
			panels[i].classList.add('active');
		}
	});

}(document));
