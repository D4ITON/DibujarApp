
/* =========== MENU DE OPCIONES =========== */
var option;
(function(d) {
  let tabs = Array.prototype.slice.apply(d.querySelectorAll('.tabs__item'));
 
  let algoritmos_linea = document.getElementById("algoritmos_linea");
  let algoritmos_linea_valor = algoritmos_linea.options[algoritmos_linea.options.selectedIndex].value;
  d.getElementById('algoritmos_linea').addEventListener('change', e=>{
    algoritmos_linea_valor = algoritmos_linea.options[algoritmos_linea.options.selectedIndex].value;
  });

  let algoritmos_circulo = document.getElementById("algoritmos_circulo");
  let algoritmos_circulo_valor = algoritmos_circulo.options[algoritmos_circulo.options.selectedIndex].value;
  d.getElementById('algoritmos_circulo').addEventListener('change', e=>{
    algoritmos_circulo_valor = algoritmos_circulo.options[algoritmos_circulo.options.selectedIndex].value;
  });

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
            var PuntosDirecto = [];
            var PuntosSimple = [];
            var PuntosEntero = [];
            // console.log(algoritmos_linea_valor);
            switch (algoritmos_linea_valor) {
              case '0':
                //linea por interfaz
                const lineaDirecto = new Linea(p.xi,p.yi,p.xf,p.yf);
                lineaDirecto.dibujarLineaDirecto();
                //linea por mouse
                canvas.addEventListener('mousedown', function __listener(evt) {
                
                var m = oMousePos(canvas,evt);
                PuntosDirecto.push(m.x,m.y)
                console.log(PuntosDirecto);
                  if (PuntosDirecto.length == 4) {
                    const lineDirecto = new Linea(PuntosDirecto[0],PuntosDirecto[1],PuntosDirecto[2],PuntosDirecto[3]);
                    lineDirecto.dibujarLineaDirecto();
                    PuntosDirecto.length = 0;
                  }
                  if (algoritmos_linea_valor != 0) {
                    canvas.removeEventListener("mousedown", __listener, false);
                  }
                }, false);
                //fin linea por mouse
                break;
              case '1':
                //linea por interfaz
                const lineaAddSimple = new Linea(p.xi,p.yi,p.xf,p.yf);
                lineaAddSimple.dibujarLineaAddSimple();
                //linea por mouse
                canvas.addEventListener('mousedown', function __listener(evt) {
                var m = oMousePos(canvas,evt);
                PuntosSimple.push(m.x,m.y)
                console.log(PuntosSimple);
                  if (PuntosSimple.length == 4) {
                    const lineDirecto = new Linea(PuntosSimple[0],PuntosSimple[1],PuntosSimple[2],PuntosSimple[3]);
                    lineDirecto.dibujarLineaDirecto();
                    PuntosSimple.length = 0;
                  }
                  if (algoritmos_linea_valor != 1) {
                    canvas.removeEventListener("mousedown", __listener, false);
                  }
                }, false);
                //fin linea por mouse
                break;
              case '2':
                //linea por interfaz
                const lineaAddEntero = new Linea(p.xi,p.yi,p.xf,p.yf);
                lineaAddEntero.dibujarLineaADDEntero();
                //linea por mouse
                canvas.addEventListener('mousedown', function __listener(evt) {
                var m = oMousePos(canvas,evt);
                PuntosEntero.push(m.x,m.y)
                console.log(PuntosEntero);
                  if (PuntosEntero.length == 4) {
                    const lineDirecto = new Linea(PuntosEntero[0],PuntosEntero[1],PuntosEntero[2],PuntosEntero[3]);
                    lineDirecto.dibujarLineaADDEntero();
                    PuntosEntero.length = 0;
                  }
                  if (algoritmos_linea_valor != 2) {
                    canvas.removeEventListener("mousedown", __listener, false);
                  }
                }, false);
                //fin linea por mouse
                break;
              default:
                console.log('metodo linea invalido');
                break;
            }
          }
          break;
        case 3:
          console.log('círculo');
          document.getElementById('btn-submit-circulo').onclick = function(){
            var p = valores_circulo();
            var PuntosCirculo = [];
            // console.log(algoritmos_circulo_valor);
            switch (algoritmos_circulo_valor) {
              case '0':{
                  //circulo por interfaz
                  const circuloImplicita = new Circulo(p.xc,p.yc,p.r);
                  circuloImplicita.dibujarCirculoImplicita();
                  //circulo por mouse

                  canvas.addEventListener('mousedown', function __listener(evt) {
                  var m = oMousePos(canvas,evt);
                  PuntosCirculo.push(m.x,m.y);
                  var radioImplicita = parseInt(document.getElementById("r").value);
                  PuntosCirculo.push(radioImplicita);
                  console.log(PuntosCirculo);
                    if (PuntosCirculo.length == 3) {
                      const circleImplicita = new Circulo(PuntosCirculo[0],PuntosCirculo[1],PuntosCirculo[2]);
                      circleImplicita.dibujarCirculoImplicita();
                      PuntosCirculo.length = 0;
                    }
                    if (algoritmos_circulo_valor != 0) {
                      canvas.removeEventListener("mousedown", __listener, false);
                    }
                  }, false);

                }
                break;
              case '1':
                {
                  //circulo por interfaz
                  const circuloPolar = new Circulo(p.xc,p.yc,p.r);
                  circuloPolar.circ_polar();
                  //circulo por mouse

                  canvas.addEventListener('mousedown', function __listener(evt) {
                  var m = oMousePos(canvas,evt);
                  PuntosCirculo.push(m.x,m.y);
                  var radioImplicita = parseInt(document.getElementById("r").value);
                  PuntosCirculo.push(radioImplicita);
                  console.log(PuntosCirculo);
                    if (PuntosCirculo.length == 3) {
                      const circlePolar = new Circulo(PuntosCirculo[0],PuntosCirculo[1],PuntosCirculo[2]);
                      circlePolar.circ_polar();
                      PuntosCirculo.length = 0;
                    }
                    if (algoritmos_circulo_valor != 1) {
                      canvas.removeEventListener("mousedown", __listener, false);
                    }
                  }, false);

                }
                break;
              case '2':
                {
                  //circulo por interfaz
                  const circuloIncremental = new Circulo(p.xc,p.yc,p.r);
                  circuloIncremental.circ_incremental();
                  //circulo por mouse

                  canvas.addEventListener('mousedown', function __listener(evt) {
                  var m = oMousePos(canvas,evt);
                  PuntosCirculo.push(m.x,m.y);
                  var radioImplicita = parseInt(document.getElementById("r").value);
                  PuntosCirculo.push(radioImplicita);
                  console.log(PuntosCirculo);
                    if (PuntosCirculo.length == 3) {
                      const circleIncremental = new Circulo(PuntosCirculo[0],PuntosCirculo[1],PuntosCirculo[2]);
                      circleIncremental.circ_incremental();
                      PuntosCirculo.length = 0;
                    }
                    if (algoritmos_circulo_valor != 2) {
                      canvas.removeEventListener("mousedown", __listener, false);
                    }
                  }, false);

                }
                break;
              case '3':
                {
                  //circulo por interfaz
                  const circuloSegmento = new Circulo(p.xc,p.yc,p.r);
                  circuloSegmento.circ_segmento();
                  //circulo por mouse

                  canvas.addEventListener('mousedown', function __listener(evt) {
                  var m = oMousePos(canvas,evt);
                  PuntosCirculo.push(m.x,m.y);
                  var radioImplicita = parseInt(document.getElementById("r").value);
                  PuntosCirculo.push(radioImplicita);
                  console.log(PuntosCirculo);
                    if (PuntosCirculo.length == 3) {
                      const circleSegmento = new Circulo(PuntosCirculo[0],PuntosCirculo[1],PuntosCirculo[2]);
                      circleSegmento.circ_segmento();
                      PuntosCirculo.length = 0;
                    }
                    if (algoritmos_circulo_valor != 3) {
                      canvas.removeEventListener("mousedown", __listener, false);
                    }
                  }, false);
                }
                break;
              case '4':
                {
                  //circulo por interfaz
                  const circuloBresenham = new Circulo(p.xc,p.yc,p.r);
                  circuloBresenham.circulo_bresenham();
                  //circulo por mouse

                  canvas.addEventListener('mousedown', function __listener(evt) {
                  var m = oMousePos(canvas,evt);
                  PuntosCirculo.push(m.x,m.y);
                  var radioImplicita = parseInt(document.getElementById("r").value);
                  PuntosCirculo.push(radioImplicita);
                  console.log(PuntosCirculo);
                    if (PuntosCirculo.length == 3) {
                      const circleBresenham = new Circulo(PuntosCirculo[0],PuntosCirculo[1],PuntosCirculo[2]);
                      circleBresenham.circulo_bresenham();
                      PuntosCirculo.length = 0;
                    }
                    if (algoritmos_circulo_valor != 4) {
                      canvas.removeEventListener("mousedown", __listener, false);
                    }
                  }, false);
                }
                break;
              default:
                console.log('metodo circulo invalido');
                break;
            }
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
          console.log('limpiar pantalla');
          document.getElementById('funcion_09').onclick = function(){
            limpiar_pantalla();
          }
          break;
      }
    }
  });
}(document));

/* ============= FUNCIONES DE DIBUJO ============= */

/* obteniendo el canvas o espacio de trabajo */
var limpiar = document.getElementById("funcion_limpiar");
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
function limpiar_pantalla(){
  ctx.clearRect(0, 0, cw, ch);
}
