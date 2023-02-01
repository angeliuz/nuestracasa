function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5sSprtojidM":
        Script1();
        break;
      case "5hzYixEI4O8":
        Script2();
        break;
      case "67WMppMqnbm":
        Script3();
        break;
      case "5dR4PXafExY":
        Script4();
        break;
      case "5cLSkinEvEN":
        Script5();
        break;
      case "5jMWdES5MvQ":
        Script6();
        break;
      case "6D27jLhtpjf":
        Script7();
        break;
      case "68IdxkC6xyr":
        Script8();
        break;
      case "64K5mpM1EBi":
        Script9();
        break;
      case "5o8u80jgtqt":
        Script10();
        break;
      case "6Ah2Hn44SN6":
        Script11();
        break;
      case "5cQKedj4JPM":
        Script12();
        break;
      case "6fdv5TTbeij":
        Script13();
        break;
      case "5pmsra7w8sr":
        Script14();
        break;
      case "6n0QyETmO6q":
        Script15();
        break;
      case "5V3RnymLCW8":
        Script16();
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

var solucion_01 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D01");
var solucion_02 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D02");
var solucion_03 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D03");
var solucion_04 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D04");
var solucion_05 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D05");

var intento_01 = window.getIntentos(cod_actividad, cod_actividad+"D01");
var intento_02 = window.getIntentos(cod_actividad, cod_actividad+"D02");
var intento_03 = window.getIntentos(cod_actividad, cod_actividad+"D03");
var intento_04 = window.getIntentos(cod_actividad, cod_actividad+"D04");
var intento_05 = window.getIntentos(cod_actividad, cod_actividad+"D05");

var logro_01 = window.getLogro(cod_actividad, cod_actividad+"D01");
var logro_02 = window.getLogro(cod_actividad, cod_actividad+"D02");
var logro_03 = window.getLogro(cod_actividad, cod_actividad+"D03");
var logro_04 = window.getLogro(cod_actividad, cod_actividad+"D04");
var logro_05 = window.getLogro(cod_actividad, cod_actividad+"D05");

window.getRespuestaMultiple(cod_actividad, cod_actividad+"D02", "texto1", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D02", "texto2", 2);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D02", "texto3", 3);

window.getRespuestaMultiple(cod_actividad, cod_actividad+"D03", "texto4", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D03", "texto5", 2);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D03", "texto6", 3);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D03", "texto7", 4);

window.getRespuestaMultiple(cod_actividad, cod_actividad+"D04", "drag1", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D04", "drag2", 2);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D04", "drag3", 3);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D04", "drag4", 4);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D04", "drag5", 5);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D04", "drag6", 6);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D04", "drag7", 7);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D04", "drag8", 8);

window.getRespuestaMultiple(cod_actividad, cod_actividad+"D05", "multi1", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D05", "multi2", 2);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D05", "multi3", 3);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D05", "multi4", 4);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D05", "multi5", 5);

console.log("trae info guardada en BD");
}

function Script3()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script4()
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

function Script5()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var texto1 = p.GetVar("texto1");
var texto2 = p.GetVar("texto2");
var texto3 = p.GetVar("texto3");
var respuesta = [texto1,texto2,texto3];
var respuesta_03 = p.GetVar("respuesta_03");

if (respuesta != respuesta_03) {
  console.log("no es igual");
  window.setIntentos(cod_actividad, cod_diapositiva);
  //window.setLogro(cod_actividad, cod_diapositiva, logro);
  window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
} else {
  console.log("es igual");
}

console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script6()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script7()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

var texto4 = localStorage.getItem(cod_diapositiva + "_texto4");
var texto5 = localStorage.getItem(cod_diapositiva + "_texto5");
var texto6 = localStorage.getItem(cod_diapositiva + "_texto6");
var texto7 = localStorage.getItem(cod_diapositiva + "_texto7");

console.log(texto4,texto5,texto6,texto7);
}

function Script8()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var texto4 = p.GetVar("texto4");
var texto5 = p.GetVar("texto5");
var texto6 = p.GetVar("texto6");
var texto7 = p.GetVar("texto7");
var respuesta = [texto4,texto5,texto6,texto7];
var respuesta_03 = p.GetVar("respuesta_03");

if (respuesta != respuesta_03) {
  console.log("no es igual");
  window.setIntentos(cod_actividad, cod_diapositiva);
  //window.setLogro(cod_actividad, cod_diapositiva, logro);
  window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
} else {
  console.log("es igual");
}

console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script9()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script10()
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
var drag6 = localStorage.getItem(cod_diapositiva + "_drag6");
var drag7 = localStorage.getItem(cod_diapositiva + "_drag7");
var drag8 = localStorage.getItem(cod_diapositiva + "_drag8");

console.log(drag1,drag2,drag3,drag4,drag5,drag6,drag7,drag8);
}

function Script11()
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
var drag6 = p.GetVar("drag6");
var drag7 = p.GetVar("drag7");
var drag8 = p.GetVar("drag8");
var respuesta = [drag1,drag2,drag3,drag4,drag5,drag6,drag7,drag8];
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

function Script12()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script13()
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

console.log(multi1,multi2,multi3,multi4,multi5);
}

function Script14()
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
var respuesta = [multi1,multi2,multi3,multi4,multi5];
var respuesta_05 = p.GetVar("respuesta_05");

if (respuesta != respuesta_05) {
  console.log("no es igual");
  window.setIntentos(cod_actividad, cod_diapositiva);
  window.setLogro(cod_actividad, cod_diapositiva, logro);
  window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
} else {
  console.log("es igual");
}

console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script15()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script16()
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

var solucion_01 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D01");
var solucion_02 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D02");
var solucion_03 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D03");
var solucion_04 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D04");
var solucion_05 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D05");

var intento_01 = window.getIntentos(cod_actividad, cod_actividad+"D01");
var intento_02 = window.getIntentos(cod_actividad, cod_actividad+"D02");
var intento_03 = window.getIntentos(cod_actividad, cod_actividad+"D03");
var intento_04 = window.getIntentos(cod_actividad, cod_actividad+"D04");
var intento_05 = window.getIntentos(cod_actividad, cod_actividad+"D05");

var logro_01 = window.getLogro(cod_actividad, cod_actividad+"D01");
var logro_02 = window.getLogro(cod_actividad, cod_actividad+"D02");
var logro_03 = window.getLogro(cod_actividad, cod_actividad+"D03");
var logro_04 = window.getLogro(cod_actividad, cod_actividad+"D04");
var logro_05 = window.getLogro(cod_actividad, cod_actividad+"D05");

var arrDiapos = ["D04","D05"];

window.getTotal(cod_actividad,arrDiapos);
}

