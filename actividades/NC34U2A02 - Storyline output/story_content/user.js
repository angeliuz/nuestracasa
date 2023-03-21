function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5vt7N5g4jLB":
        Script1();
        break;
      case "6Imc1MNkxhO":
        Script2();
        break;
      case "6kpC8rmtUJa":
        Script3();
        break;
      case "6IsZfqmcE4F":
        Script4();
        break;
      case "649rIddOu2h":
        Script5();
        break;
      case "6bMdTkLwBih":
        Script6();
        break;
      case "6ZN0e6lBfUN":
        Script7();
        break;
      case "61euIYInNUq":
        Script8();
        break;
      case "5ZhP9n6gijv":
        Script9();
        break;
      case "5rcVnM0uYjk":
        Script10();
        break;
  }
}

function Script1()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setCodigoDiapositiva(cod_actividad, cod_actividad+"D01");
window.setCodigoDiapositiva(cod_actividad, cod_actividad+"D02");


window.getCodigoDiapositiva(cod_actividad, cod_diapositiva);
window.getIntentos(cod_actividad, cod_diapositiva);

console.log("Inicializa actividades en BD",cod_actividad+"D02");
}

function Script2()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

var respuesta_01 = window.getRespuesta(cod_actividad, cod_actividad+"D01");
var respuesta_02 = window.getRespuesta(cod_actividad, cod_actividad+"D02");

var solucion_01 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D01");
var solucion_02 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D02");

var intento_01 = window.getIntentos(cod_actividad, cod_actividad+"D01");
var intento_02 = window.getIntentos(cod_actividad, cod_actividad+"D02");

var logro_01 = window.getLogro(cod_actividad, cod_actividad+"D01");
var logro_02 = window.getLogro(cod_actividad, cod_actividad+"D02");

window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "texto1", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "texto2", 2);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "texto3", 3);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "texto4", 4);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "texto5", 5);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "texto6", 6);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "texto7", 7);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "texto8", 8);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "texto9", 9);

window.getRespuestaMultiple(cod_actividad, cod_actividad+"D02", "drag1", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D02", "drag2", 2);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D02", "drag3", 3);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D02", "drag4", 4);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D02", "drag5", 5);



//console.log("multiple", respuesta_01)

console.log("trae info guardada en BD");

//var lmsAPI = parent.lmsAPI;

//var lmsAPI = parent;
//console.log('-----------------> lmsAPI',lmsAPI);
}

function Script3()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

var texto1 = localStorage.getItem(cod_diapositiva + "_texto1");
var texto2 = localStorage.getItem(cod_diapositiva + "_texto2");
var texto3 = localStorage.getItem(cod_diapositiva + "_texto3");
var texto4 = localStorage.getItem(cod_diapositiva + "_texto4");
var texto5 = localStorage.getItem(cod_diapositiva + "_texto5");
var texto6 = localStorage.getItem(cod_diapositiva + "_texto6");
var texto7 = localStorage.getItem(cod_diapositiva + "_texto7");
var texto8 = localStorage.getItem(cod_diapositiva + "_texto8");
var texto9 = localStorage.getItem(cod_diapositiva + "_texto9");

console.log(texto1,texto2,texto3,texto4,texto5,texto6,texto7,texto8,texto9);
}

function Script4()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var texto1 = p.GetVar("texto1");
var texto2 = p.GetVar("texto2");
var texto3 = p.GetVar("texto3");
var texto4 = p.GetVar("texto4");
var texto5 = p.GetVar("texto5");
var texto6 = p.GetVar("texto6");
var texto7 = p.GetVar("texto7");
var texto8 = p.GetVar("texto8");
var texto9 = p.GetVar("texto9");
var respuesta = [texto1,texto2,texto3,texto4,texto5,texto6,texto7,texto8,texto9];
var respuesta_01 = p.GetVar("respuesta_01");

if (respuesta != respuesta_01) {
  console.log("no es igual");
  window.setIntentos(cod_actividad, cod_diapositiva);
  //window.setLogro(cod_actividad, cod_diapositiva, logro);
  window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
} else {
  console.log("es igual");
}

console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script5()
{
  var p = GetPlayer();
player = GetPlayer();
var texto1 = p.GetVar("texto1");
var texto2 = p.GetVar("texto2");
var texto3 = p.GetVar("texto3");
var texto4 = p.GetVar("texto4");
var texto5 = p.GetVar("texto5");
var texto6 = p.GetVar("texto6");
var texto7 = p.GetVar("texto7");
var texto8 = p.GetVar("texto8");
var texto9 = (texto1+texto2+texto3+texto4+texto5+texto6+texto7+texto8);

texto9 = p.SetVar("texto9");

console.log(texto9);
}

function Script6()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script7()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

var drag1 = localStorage.getItem(cod_diapositiva + "_drag1");
var drag2 = localStorage.getItem(cod_diapositiva + "_drag2");
var drag3 = localStorage.getItem(cod_diapositiva + "_drag3");
var drag4 = localStorage.getItem(cod_diapositiva + "_drag4");
var drag5 = localStorage.getItem(cod_diapositiva + "_drag5");

console.log(drag1,drag2,drag3,drag4,drag5);
}

function Script8()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var logro = p.GetVar("logro");
var drag1 = p.GetVar("drag1");
var drag2 = p.GetVar("drag2");
var drag3 = p.GetVar("drag3");
var drag4 = p.GetVar("drag4");
var drag5 = p.GetVar("drag5");
var respuesta = [drag1,drag2,drag3,drag4,drag5];
var respuesta_02 = p.GetVar("respuesta_02");

if (respuesta != respuesta_02) {
  console.log("no es igual");
  window.setIntentos(cod_actividad, cod_diapositiva);
  window.setLogro(cod_actividad, cod_diapositiva, logro);
  window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
} else {
  console.log("es igual");
}

console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script9()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script10()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

var respuesta_01 = window.getRespuesta(cod_actividad, cod_actividad+"D01");
var respuesta_02 = window.getRespuesta(cod_actividad, cod_actividad+"D02");

var solucion_01 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D01");
var solucion_02 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D02");

var intento_01 = window.getIntentos(cod_actividad, cod_actividad+"D01");
var intento_02 = window.getIntentos(cod_actividad, cod_actividad+"D02");

var logro_01 = window.getLogro(cod_actividad, cod_actividad+"D01");
var logro_02 = window.getLogro(cod_actividad, cod_actividad+"D02");


var arrDiapos = ["D02"];

window.getTotal(cod_actividad,arrDiapos);
}

