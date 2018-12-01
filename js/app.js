/**
  @título   : Interfaz basada en "Adobe XD CC"
  @fecha    : 26.11.2018
  @tipo		  : JavaScript
  @autor    : DALTHON
  @versión  : 0.0.5
  @curso    : CAD
*/

/* ============= DIBUJAR A MANO ALZADA ============= */

/* ------ DETECCION DE LA POSICION DEL MOUSE------  */
/* obteniendo el canvas o espacio de trabajo */
var limpiar = document.getElementById("funcion_09");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var cw = canvas.width = 850,
  cx = cw / 2;
var ch = canvas.height = 500,
  cy = ch / 2;

/* ===== deteccion de la posicion del mouse ===== */

function oMousePos(canvas, evt) {
  var ClientRect = canvas.getBoundingClientRect();
  return { //objeto
    x: Math.round(evt.clientX - ClientRect.left),
    y: Math.round(evt.clientY - ClientRect.top)
  }
}

/* =========== MENU DE OPCIONES =========== */
$(function(){
    // $("#menu-left button").on("click", function(){
    //   dibujar_trazo_fino();
    //   // dibujar_areografo();
      
    // });
    $("#funcion_03").on("click", function(){
      dibujar_trazo_fino();
    });
    $("#funcion_04").on("click", function(){
      dibujar_areografo();
    });
});

/* ========== FUNCION TRAZO FINO ========== */
/* ======================================== */

function dibujar_trazo_fino() {

  // variables
  var dibujar = false;
  var factorDeAlisamiento = 5;
  var Trazados = [];
  var puntos = [];
  ctx.lineJoin = "round";

// funcion limpiar pantalla
limpiar.addEventListener('click', function(evt) {
  dibujar = false;
  ctx.clearRect(0, 0, cw, ch);
  Trazados.length = 0;
  puntos.length = 0;
}, false);


canvas.addEventListener('mousedown', function(evt) {
  dibujar = true;
  //ctx.clearRect(0, 0, cw, ch);
  puntos.length = 0;
  ctx.beginPath();

}, false);

canvas.addEventListener('mouseup', function(evt) {
  redibujarTrazados();
}, false);

canvas.addEventListener("mouseout", function(evt) {
  redibujarTrazados();
}, false);

canvas.addEventListener("mousemove", function(evt) {
  if (dibujar) {
    var m = oMousePos(canvas, evt);
    puntos.push(m);
    ctx.lineTo(m.x, m.y);
    ctx.stroke();
  }
}, false);


function reducirArray(n,elArray) {
  var nuevoArray = [];
  nuevoArray[0] = elArray[0];
  for (var i = 0; i < elArray.length; i++) {
    if (i % n == 0) {
      nuevoArray[nuevoArray.length] = elArray[i];
    }
  }
  nuevoArray[nuevoArray.length - 1] = elArray[elArray.length - 1];
  Trazados.push(nuevoArray);
}

function calcularPuntoDeControl(ry, a, b) {
  var pc = {}
  pc.x = (ry[a].x + ry[b].x) / 2;
  pc.y = (ry[a].y + ry[b].y) / 2;
  return pc;
}

function alisarTrazado(ry) {
  if (ry.length > 1) {
    var ultimoPunto = ry.length - 1;
    ctx.beginPath();
    ctx.moveTo(ry[0].x, ry[0].y);
    for (i = 1; i < ry.length - 2; i++) {
      var pc = calcularPuntoDeControl(ry, i, i + 1);
      ctx.quadraticCurveTo(ry[i].x, ry[i].y, pc.x, pc.y);
    }
    ctx.quadraticCurveTo(ry[ultimoPunto - 1].x, ry[ultimoPunto - 1].y, ry[ultimoPunto].x, ry[ultimoPunto].y);
    ctx.stroke();
  }
}


function redibujarTrazados(){
  dibujar = false;
  ctx.clearRect(0, 0, cw, ch);
  reducirArray(factorDeAlisamiento,puntos);
  for(var i = 0; i < Trazados.length; i++)
    alisarTrazado(Trazados[i]);
}

}

/* ========== FUNCION AREOGRAFO ========== */
/* ======================================== */

function dibujar_areografo() {
  

var dibujar = false;

var densidad_aerografo = 50;
var radio_aerografo = 10;
//var color_aerografo = "rgb(106,177,80)";

//crea un rectángulo blanco del tamaño del canvas
ctx.beginPath();
ctx.fillStyle = "white";
ctx.fillRect(0, 0, cw, ch);

var imgData = ctx.getImageData(0, 0, cw, ch);
var pixels = imgData.data;


//eventos
canvas.addEventListener('mousedown', function(evt) {
  dibujar = true;
}, false);

canvas.addEventListener('mouseup', function(evt) {
  dibujar = false;
}, false);

canvas.addEventListener("mouseout", function(evt) {
  dibujar = false;
}, false);

canvas.addEventListener("mousemove", function(evt) {
  if (dibujar) {
    var m = oMousePos(canvas, evt);
    Aerografo(m);
  }
}, false);

limpiar.addEventListener('click', function() {
  ctx.fillRect(0,0,cw,ch);
  imgData = ctx.getImageData(0, 0, cw, ch);
  pixels = imgData.data;
}, false);



function Aerografo(m) {

  for (var p = 0; p < densidad_aerografo; p++) {
    
    var a = Math.random() * Math.PI * 2;//el ángulo
    var r = Math.random() * radio_aerografo;// el radio
    var x = ~~(m.x + r * Math.cos(a));
    var y = ~~(m.y + r * Math.sin(a));
    var i = (x + y * imgData.width) * 4; //el index

    pixels[i + 0] = 106; //rojo
    pixels[i + 1] = 177; //verde
    pixels[i + 2] = 80; //azul

  }

  ctx.putImageData(imgData, 0, 0);

}

}
