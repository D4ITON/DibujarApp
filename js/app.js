
/* =========== MENU DE OPCIONES =========== */
var option;
(function(d) {
  let tabs = Array.prototype.slice.apply(d.querySelectorAll('.tabs__item'));
  d.getElementById('tabs').addEventListener('click', e=>{
    if (e.target.classList.contains('tabs__item')) {
      // console.log(tabs.indexOf(e.target));
      option = tabs.indexOf(e.target);
      // console.log(option);
      switch (option) {
        case 0:
          console.log('mouse');
          break;
        case 1:
          console.log('trazo a mano alzada');
          dibujar_trazo();
          break;
        case 2:
          console.log('línea');
          valores_linea();
          document.getElementById('btn-submit-linea').onclick = function(){
            var p = valores_linea();
            dibujarLineaADDEntero(p.xi,p.yi,p.xf,p.yf);
          }
          break;
        case 3:
          console.log('círculo');
          document.getElementById('btn-submit-circulo').onclick = function(){
            var p = valores_circulo();
            circ_segmento(p.xc,p.yc,p.r);
          }
          break;
        case 4:
          console.log('elipse');
          document.getElementById('btn-submit-elipse').onclick = function(){
            var p = valores_elipse();
            dibujarElipse(p.xce,p.yce,p.a,p.b);
          }
          break;
        default:
          console.log('default');
          break;
      }
    }
  });
}(document));

/* ============= FUNCIONES DE DIBUJO ============= */

/* ------ DETECCION DE LA POSICION DEL MOUSE------  */
/* obteniendo el canvas o espacio de trabajo */
var limpiar = document.getElementById("funcion_09");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var cw = canvas.width = 850,
  cx = cw / 2;
var ch = canvas.height = 500,
  cy = ch / 2;
var imgData = ctx.createImageData(1, 1);
for ( var i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i+0] = 0;
    imgData.data[i+1] = 0;
    imgData.data[i+2] = 0;
    imgData.data[i+3] = 255;
}

// document.getElementById('btn-submit').onclick = function(){
//   var p = dibujar();
  // console.log(p.xi,p.yi,p.xf,p.yf);
  // console.log(p.xc,p.yc,p.r);

  // dibujarLinea(p.xi,p.yi,p.xf,p.yf); // metodo directo           (ESTABLE)
  // dibujarLineaAddSimple(p.xi,p.yi,p.xf,p.yf);  //metodo ADD SIMPLE     (ESTABLE)
  // dibujarLineaADDEntero(p.xi,p.yi,p.xf,p.yf);  //metodo ADD ENTERO     (ESTABLE)
  // dibujarCirculoImplicita(p.xc,p.yc,p.r); //metodo CIRCULO IMPLICITO   (ESTABLE)
  // circ_polar(p.xc,p.yc,p.r); //metodo PARAMETRICA circ_polar         (ESTABLE)
  // circ_incremental(p.xc,p.yc,p.r); //metodo TRAZADO INCREMENTAL      (ESTABLE)
  // circ_segmento(p.xc,p.yc,p.r); //metodo SEGMENTOS DE RECTA        (ESTABLE)
  // circulo_bresenham(p.xc,p.yc,p.r); //metodo BRESENHAM           (MEJORAR)
  //dibujarElipse(p.xc,p.yc,p.a,p.b); // elipse mediante trazados     (ESTABLE)
// }

function valores_linea() {
  return {
    /*---valores linea---*/
    xi: parseInt(document.getElementById("xi").value),
    yi: parseInt(document.getElementById("yi").value),
    xf: parseInt(document.getElementById("xf").value),
    yf: parseInt(document.getElementById("yf").value),
  }
}

function valores_circulo(){
  return{
    /*---valores circulo---*/
    xc: parseInt(document.getElementById("xc").value),
    yc: parseInt(document.getElementById("yc").value),
    r: parseInt(document.getElementById("r").value)
  }
}

function valores_elipse(){
  return{
    /*---valores elipse---*/
    xce: parseInt(document.getElementById("xce").value),
    yce: parseInt(document.getElementById("yce").value),
    a: parseInt(document.getElementById("a").value),
    b: parseInt(document.getElementById("b").value)
  }
}

/* ===== deteccion de la posicion del mouse ===== */

function oMousePos(canvas, evt) {
  var ClientRect = canvas.getBoundingClientRect();
  return { //objeto
    x: Math.round(evt.clientX - ClientRect.left),
    y: Math.round(evt.clientY - ClientRect.top)
  }
}

function validados(xi,yi,xf,yf) {
  
  if (yi>=yf || xi>=xf) 
  {
      var aux;
      aux = xf;
      xf = xi;
      xi = aux;
      aux = yf;
      yf = yi;
      yi = aux;
      return {
        xi,yi,xf,yf
      };
  }
  return {
    xi,yi,xf,yf
  };
}


