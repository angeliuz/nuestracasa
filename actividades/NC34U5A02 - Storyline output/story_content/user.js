function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6r96AdYADY8":
        Script1();
        break;
      case "6nyjpmNyR2O":
        Script2();
        break;
      case "6TUxHEpqjWy":
        Script3();
        break;
      case "66QdpFaRCM6":
        Script4();
        break;
      case "5zro37qxiTK":
        Script5();
        break;
      case "5qmIn0rf5pp":
        Script6();
        break;
      case "6nnvL2bUFG4":
        Script7();
        break;
      case "64ZkgLTX1vy":
        Script8();
        break;
      case "5wmuBkEDkHl":
        Script9();
        break;
      case "5yQlFqvkHZn":
        Script10();
        break;
      case "5XwI5nCHs6V":
        Script11();
        break;
      case "5f1aCKScqWa":
        Script12();
        break;
      case "6AC4W6JeMkC":
        Script13();
        break;
      case "5cTcGQxwJVQ":
        Script14();
        break;
      case "61ifvfyuSG4":
        Script15();
        break;
      case "6UzFBpM0BFj":
        Script16();
        break;
      case "5rjaufUdwHb":
        Script17();
        break;
      case "5e7yGlnY5MS":
        Script18();
        break;
      case "5gTQ8sSFdni":
        Script19();
        break;
      case "6lDQAA1y1zz":
        Script20();
        break;
      case "5p2BbHjzw60":
        Script21();
        break;
      case "6n4uBQnoBqC":
        Script22();
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
window.setCodigoDiapositiva(cod_actividad, cod_actividad+"D03");
window.setCodigoDiapositiva(cod_actividad, cod_actividad+"D04");
window.setCodigoDiapositiva(cod_actividad, cod_actividad+"D05");
window.setCodigoDiapositiva(cod_actividad, cod_actividad+"D06");
window.setCodigoDiapositiva(cod_actividad, cod_actividad+"D07");

window.getCodigoDiapositiva(cod_actividad, cod_diapositiva);
window.getIntentos(cod_actividad, cod_diapositiva);

console.log("Inicializa actividades en BD",cod_actividad+"D01");
}

function Script2()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

var respuesta_01 = window.getRespuesta(cod_actividad, cod_actividad+"D01");
var respuesta_02 = window.getRespuesta(cod_actividad, cod_actividad+"D02");
var respuesta_03 = window.getRespuesta(cod_actividad, cod_actividad+"D03");
var respuesta_04 = window.getRespuesta(cod_actividad, cod_actividad+"D04");
var respuesta_05 = window.getRespuesta(cod_actividad, cod_actividad+"D05");
var respuesta_06 = window.getRespuesta(cod_actividad, cod_actividad+"D06");
var respuesta_07 = window.getRespuesta(cod_actividad, cod_actividad+"D07");

var solucion_01 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D01");
var solucion_02 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D02");
var solucion_03 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D03");
var solucion_04 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D04");
var solucion_05 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D05");
var solucion_06 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D06");
var solucion_07 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D07");

var intento_01 = window.getIntentos(cod_actividad, cod_actividad+"D01");
var intento_02 = window.getIntentos(cod_actividad, cod_actividad+"D02");
var intento_03 = window.getIntentos(cod_actividad, cod_actividad+"D03");
var intento_04 = window.getIntentos(cod_actividad, cod_actividad+"D04");
var intento_05 = window.getIntentos(cod_actividad, cod_actividad+"D05");
var intento_06 = window.getIntentos(cod_actividad, cod_actividad+"D06");
var intento_07 = window.getIntentos(cod_actividad, cod_actividad+"D07");

var logro_01 = window.getLogro(cod_actividad, cod_actividad+"D01");
var logro_02 = window.getLogro(cod_actividad, cod_actividad+"D02");
var logro_03 = window.getLogro(cod_actividad, cod_actividad+"D03");
var logro_04 = window.getLogro(cod_actividad, cod_actividad+"D04");
var logro_05 = window.getLogro(cod_actividad, cod_actividad+"D05");
var logro_06 = window.getLogro(cod_actividad, cod_actividad+"D06");
var logro_07 = window.getLogro(cod_actividad, cod_actividad+"D07");

window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag1", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag2", 2);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag3", 3);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag4", 4);

window.getRespuestaMultiple(cod_actividad, cod_actividad+"D02", "multi1", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D02", "multi2", 2);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D02", "multi3", 3);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D02", "multi4", 4);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D02", "multi5", 5);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D02", "multi6", 6);

window.getRespuestaMultiple(cod_actividad, cod_actividad+"D03", "drag5", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D03", "drag6", 2);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D03", "drag7", 3);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D03", "drag8", 4);

window.getRespuestaMultiple(cod_actividad, cod_actividad+"D04", "drag9", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D04", "drag10", 2);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D04", "drag11", 3);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D04", "drag12", 4);

window.getRespuestaMultiple(cod_actividad, cod_actividad+"D05", "texto1", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D05", "texto2", 2);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D05", "texto3", 3);

window.getRespuestaMultiple(cod_actividad, cod_actividad+"D06", "texto4", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D06", "texto5", 2);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D06", "texto6", 3);

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

var drag1 = localStorage.getItem(cod_diapositiva + "_drag1")
var drag2 = localStorage.getItem(cod_diapositiva + "_drag2")
var drag3 = localStorage.getItem(cod_diapositiva + "_drag3")
var drag4 = localStorage.getItem(cod_diapositiva + "_drag4")

console.log(drag1,drag2,drag3,drag4);
}

function Script4()
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
var respuesta = [drag1,drag2,drag3,drag4];
var respuesta_01 = p.GetVar("respuesta_01");

if (respuesta != respuesta_01) {
  console.log("no es igual");
  window.setIntentos(cod_actividad, cod_diapositiva);
  window.setLogro(cod_actividad, cod_diapositiva, logro);
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
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script6()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

var multi1 = localStorage.getItem(cod_diapositiva + "_multi1");
var multi2 = localStorage.getItem(cod_diapositiva + "_multi2");
var multi3 = localStorage.getItem(cod_diapositiva + "_multi3");
var multi4 = localStorage.getItem(cod_diapositiva + "_multi4");
var multi5 = localStorage.getItem(cod_diapositiva + "_multi5");
var multi6 = localStorage.getItem(cod_diapositiva + "_multi6");

console.log(multi1,multi2,multi3,multi4,multi5,multi6);
}

function Script7()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var logro = p.GetVar("logro");
var multi1 = p.GetVar("multi1");
var multi2 = p.GetVar("multi2");
var multi3 = p.GetVar("multi3");
var multi4 = p.GetVar("multi4");
var multi5 = p.GetVar("multi5");
var multi6 = p.GetVar("multi6");
var respuesta = [multi1,multi2,multi3,multi4,multi5,multi6];
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

function Script8()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script9()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

var drag5 = localStorage.getItem(cod_diapositiva + "_drag5");
var drag6 = localStorage.getItem(cod_diapositiva + "_drag6");
var drag7 = localStorage.getItem(cod_diapositiva + "_drag7");
var drag8 = localStorage.getItem(cod_diapositiva + "_drag8");

console.log(drag5,drag6,drag7,drag8);
}

function Script10()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var logro = p.GetVar("logro");
var drag5 = p.GetVar("drag5");
var drag6 = p.GetVar("drag6");
var drag7 = p.GetVar("drag7");
var drag8 = p.GetVar("drag8");
var respuesta = [drag5,drag6,drag7,drag8];
var respuesta_03 = p.GetVar("respuesta_03");

if (respuesta != respuesta_03) {
  console.log("no es igual");
  window.setIntentos(cod_actividad, cod_diapositiva);
  window.setLogro(cod_actividad, cod_diapositiva, logro);
  window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
} else {
  console.log("es igual");
}

console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script11()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script12()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

var drag9 = localStorage.getItem(cod_diapositiva + "_drag9")
var drag10 = localStorage.getItem(cod_diapositiva + "_drag10")
var drag11 = localStorage.getItem(cod_diapositiva + "_drag11")
var drag12 = localStorage.getItem(cod_diapositiva + "_drag12")

console.log(drag9,drag10,drag11,drag12);
}

function Script13()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var logro = p.GetVar("logro");
var drag9 = p.GetVar("drag9");
var drag10 = p.GetVar("drag10");
var drag11 = p.GetVar("drag11");
var drag12 = p.GetVar("drag12");
var respuesta = [drag9,drag10,drag11,drag12];
var respuesta_04 = p.GetVar("respuesta_04");

if (respuesta != respuesta_04) {
  console.log("no es igual");
  window.setIntentos(cod_actividad, cod_diapositiva);
  window.setLogro(cod_actividad, cod_diapositiva, logro);
  window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
} else {
  console.log("es igual");
}

console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script14()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script15()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

var texto1 = localStorage.getItem(cod_diapositiva + "_texto1");
var texto2 = localStorage.getItem(cod_diapositiva + "_texto2");
var texto3 = localStorage.getItem(cod_diapositiva + "_texto3");

console.log(texto1,texto2,texto3);
}

function Script16()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var texto1 = p.GetVar("texto1");
var texto2 = p.GetVar("texto2");
var texto3 = p.GetVar("texto3");
var respuesta = [texto1,texto2,texto3];
var respuesta_05 = p.GetVar("respuesta_05");

if (respuesta != respuesta_05) {
  console.log("no es igual");
  window.setIntentos(cod_actividad, cod_diapositiva);
  //window.setLogro(cod_actividad, cod_diapositiva, logro);
  window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
} else {
  console.log("es igual");
}

console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script17()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script18()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

var texto4 = localStorage.getItem(cod_diapositiva + "_texto4");
var texto5 = localStorage.getItem(cod_diapositiva + "_texto5");
var texto6 = localStorage.getItem(cod_diapositiva + "_texto6");

console.log(texto4,texto5,texto6);
}

function Script19()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var texto4 = p.GetVar("texto4");
var texto5 = p.GetVar("texto5");
var texto6 = p.GetVar("texto6");
var respuesta = [texto4,texto5,texto6];
var respuesta_06 = p.GetVar("respuesta_06");

if (respuesta != respuesta_06) {
  console.log("no es igual");
  window.setIntentos(cod_actividad, cod_diapositiva);
  //window.setLogro(cod_actividad, cod_diapositiva, logro);
  window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
} else {
  console.log("es igual");
}

console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script20()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script21()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script22()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

var respuesta_01 = window.getRespuesta(cod_actividad, cod_actividad+"D01");
var respuesta_02 = window.getRespuesta(cod_actividad, cod_actividad+"D02");
var respuesta_03 = window.getRespuesta(cod_actividad, cod_actividad+"D03");
var respuesta_04 = window.getRespuesta(cod_actividad, cod_actividad+"D04");
var respuesta_05 = window.getRespuesta(cod_actividad, cod_actividad+"D05");
var respuesta_06 = window.getRespuesta(cod_actividad, cod_actividad+"D06");
var respuesta_07 = window.getRespuesta(cod_actividad, cod_actividad+"D07");

var solucion_01 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D01");
var solucion_02 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D02");
var solucion_03 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D03");
var solucion_04 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D04");
var solucion_05 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D05");
var solucion_06 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D06");
var solucion_07 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D07");

var intento_01 = window.getIntentos(cod_actividad, cod_actividad+"D01");
var intento_02 = window.getIntentos(cod_actividad, cod_actividad+"D02");
var intento_03 = window.getIntentos(cod_actividad, cod_actividad+"D03");
var intento_04 = window.getIntentos(cod_actividad, cod_actividad+"D04");
var intento_05 = window.getIntentos(cod_actividad, cod_actividad+"D05");
var intento_06 = window.getIntentos(cod_actividad, cod_actividad+"D06");
var intento_07 = window.getIntentos(cod_actividad, cod_actividad+"D07");

var logro_01 = window.getLogro(cod_actividad, cod_actividad+"D01");
var logro_02 = window.getLogro(cod_actividad, cod_actividad+"D02");
var logro_03 = window.getLogro(cod_actividad, cod_actividad+"D03");
var logro_04 = window.getLogro(cod_actividad, cod_actividad+"D04");
var logro_05 = window.getLogro(cod_actividad, cod_actividad+"D05");
var logro_06 = window.getLogro(cod_actividad, cod_actividad+"D06");
var logro_07 = window.getLogro(cod_actividad, cod_actividad+"D07");

var arrDiapos = ["D01","D02","D03","D04"];

window.getTotal(cod_actividad,arrDiapos);
}

