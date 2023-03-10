function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5pxnqo1peO3":
        Script1();
        break;
      case "68iScFkqBEY":
        Script2();
        break;
      case "685cbh3Hyxn":
        Script3();
        break;
      case "67muqyhHcOA":
        Script4();
        break;
      case "6EdVltu28g2":
        Script5();
        break;
      case "5i6KWBeS8Le":
        Script6();
        break;
      case "5cj2cpANyBY":
        Script7();
        break;
      case "5pdN6J00LeF":
        Script8();
        break;
      case "5oNXAsXnIkA":
        Script9();
        break;
      case "6g7YZdQF12l":
        Script10();
        break;
      case "6ikUn1g1wFf":
        Script11();
        break;
      case "6VZ4u5rEcWc":
        Script12();
        break;
      case "6objPJmbFlX":
        Script13();
        break;
      case "6VRY290xQo5":
        Script14();
        break;
      case "63CCYEg9anV":
        Script15();
        break;
      case "5a7VrCP13mN":
        Script16();
        break;
      case "6bl60ziVYw2":
        Script17();
        break;
      case "6diQWCEn6An":
        Script18();
        break;
      case "6rfuv4K4SWb":
        Script19();
        break;
      case "5jvrnooNnJY":
        Script20();
        break;
      case "62BK5MVKERH":
        Script21();
        break;
      case "6M4G7Qo6ciR":
        Script22();
        break;
      case "6C2Vbx2V5XB":
        Script23();
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
window.setCodigoDiapositiva(cod_actividad, cod_actividad+"D08");
window.setCodigoDiapositiva(cod_actividad, cod_actividad+"D09");
window.setCodigoDiapositiva(cod_actividad, cod_actividad+"D10");


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
var respuesta_08 = window.getRespuesta(cod_actividad, cod_actividad+"D08");
var respuesta_09 = window.getRespuesta(cod_actividad, cod_actividad+"D09");
var respuesta_10 = window.getRespuesta(cod_actividad, cod_actividad+"D10");

var solucion_01 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D01");
var solucion_02 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D02");
var solucion_03 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D03");
var solucion_04 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D04");
var solucion_05 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D05");
var solucion_06 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D06");
var solucion_07 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D07");
var solucion_08 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D08");
var solucion_09 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D09");
var solucion_10 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D10");

var intento_01 = window.getIntentos(cod_actividad, cod_actividad+"D01");
var intento_02 = window.getIntentos(cod_actividad, cod_actividad+"D02");
var intento_03 = window.getIntentos(cod_actividad, cod_actividad+"D03");
var intento_04 = window.getIntentos(cod_actividad, cod_actividad+"D04");
var intento_05 = window.getIntentos(cod_actividad, cod_actividad+"D05");
var intento_06 = window.getIntentos(cod_actividad, cod_actividad+"D06");
var intento_07 = window.getIntentos(cod_actividad, cod_actividad+"D07");
var intento_08 = window.getIntentos(cod_actividad, cod_actividad+"D08");
var intento_09 = window.getIntentos(cod_actividad, cod_actividad+"D09");
var intento_10 = window.getIntentos(cod_actividad, cod_actividad+"D10");

var logro_01 = window.getLogro(cod_actividad, cod_actividad+"D01");
var logro_02 = window.getLogro(cod_actividad, cod_actividad+"D02");
var logro_03 = window.getLogro(cod_actividad, cod_actividad+"D03");
var logro_04 = window.getLogro(cod_actividad, cod_actividad+"D04");
var logro_05 = window.getLogro(cod_actividad, cod_actividad+"D05");
var logro_06 = window.getLogro(cod_actividad, cod_actividad+"D06");
var logro_07 = window.getLogro(cod_actividad, cod_actividad+"D07");
var logro_08 = window.getLogro(cod_actividad, cod_actividad+"D08");
var logro_09 = window.getLogro(cod_actividad, cod_actividad+"D09");
var logro_10 = window.getLogro(cod_actividad, cod_actividad+"D10");

window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "texto1", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "texto2", 2);

window.getRespuestaMultiple(cod_actividad, cod_actividad+"D07", "drag1", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D07", "drag2", 2);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D07", "drag3", 3);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D07", "drag4", 4);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D07", "drag5", 5);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D07", "drag6", 6);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D07", "drag7", 7);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D07", "drag8", 8);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D07", "drag9", 9);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D07", "drag10", 10);

window.getRespuestaMultiple(cod_actividad, cod_actividad+"D08", "texto3", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D08", "texto4", 2);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D08", "texto5", 3);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D08", "texto6", 4);

window.getRespuestaMultiple(cod_actividad, cod_actividad+"D10", "texto7", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D10", "texto8", 2);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D10", "texto9", 3);

console.log("trae info guardada en BD");
}

function Script3()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var texto1 = p.GetVar("texto1");
var texto2 = p.GetVar("texto2");

var respuesta = [texto1,texto2];
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

function Script4()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script5()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");
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
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");
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
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");
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

function Script10()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script11()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");
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
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");
var respuesta_06 = p.GetVar("respuesta_06");

if (respuesta != respuesta_06) {
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

var drag1 = localStorage.getItem(cod_diapositiva + "_drag1");
var drag2 = localStorage.getItem(cod_diapositiva + "_drag2");
var drag3 = localStorage.getItem(cod_diapositiva + "_drag3");
var drag4 = localStorage.getItem(cod_diapositiva + "_drag4");
var drag5 = localStorage.getItem(cod_diapositiva + "_drag5");
var drag6 = localStorage.getItem(cod_diapositiva + "_drag6");
var drag7 = localStorage.getItem(cod_diapositiva + "_drag7");
var drag8 = localStorage.getItem(cod_diapositiva + "_drag8");
var drag9 = localStorage.getItem(cod_diapositiva + "_drag9");
var drag10 = localStorage.getItem(cod_diapositiva + "_drag10");


console.log(drag1,drag2,drag3,drag4,drag5,drag6,drag7,drag8,drag9,drag10);
}

function Script16()
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
var drag9 = p.GetVar("drag9");
var drag10 = p.GetVar("drag10");
var respuesta = [drag1,drag2,drag3,drag4,drag5,drag6,drag7,drag8,drag9,drag10];
var respuesta_07 = p.GetVar("respuesta_07");

if (respuesta != respuesta_07) {
  console.log("no es igual");
  window.setIntentos(cod_actividad, cod_diapositiva);
  window.setLogro(cod_actividad, cod_diapositiva, logro);
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
var texto3 = p.GetVar("texto3");
var texto4 = p.GetVar("texto4");
var texto5 = p.GetVar("texto5");
var texto6 = p.GetVar("texto6");

var respuesta = [texto3,texto4,texto5,texto6];
var respuesta_08 = p.GetVar("respuesta_08");

if (respuesta != respuesta_08) {
  console.log("no es igual");
  window.setIntentos(cod_actividad, cod_diapositiva);
  //window.setLogro(cod_actividad, cod_diapositiva, logro);
  window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
} else {
  console.log("es igual");
}

console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));

}

function Script19()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
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
var texto7 = p.GetVar("texto7");
var texto8 = p.GetVar("texto8");
var texto9 = p.GetVar("texto9");


var respuesta = [texto7,texto8,texto9];
var respuesta_10 = p.GetVar("respuesta_10");

if (respuesta != respuesta_10) {
  console.log("no es igual");
  window.setIntentos(cod_actividad, cod_diapositiva);
  //window.setLogro(cod_actividad, cod_diapositiva, logro);
  window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
} else {
  console.log("es igual");
}

console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));

}

function Script22()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script23()
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

var arrDiapos = ["D02","D03","D04","D05","D06","D07"];

window.getTotal(cod_actividad,arrDiapos);
}

