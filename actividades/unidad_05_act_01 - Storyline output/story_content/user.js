function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6K0NKZgVFCY":
        Script1();
        break;
      case "5yXyRciJQdQ":
        Script2();
        break;
      case "5eM4BIAlgbC":
        Script3();
        break;
      case "5fyB7rS2BQ8":
        Script4();
        break;
      case "6n1iArjvdd6":
        Script5();
        break;
      case "69ESUJTgFel":
        Script6();
        break;
      case "6o90NZbIF3c":
        Script7();
        break;
      case "63K1dEWI6RP":
        Script8();
        break;
      case "5arwwMKljfC":
        Script9();
        break;
      case "6RNwdvpjBCb":
        Script10();
        break;
      case "5gSzbyYcqx8":
        Script11();
        break;
      case "6j1CvM1rqD7":
        Script12();
        break;
      case "5sE2baPdEjh":
        Script13();
        break;
      case "6pn2hWlbf4R":
        Script14();
        break;
      case "5hPSiCAj3Vy":
        Script15();
        break;
      case "62F2uyh9sgV":
        Script16();
        break;
      case "5fAEYBbSPCa":
        Script17();
        break;
      case "6AQ8NlBvZit":
        Script18();
        break;
      case "61bwSJ6MFiy":
        Script19();
        break;
      case "6Uq1MChmFKL":
        Script20();
        break;
      case "5srONUAUiHR":
        Script21();
        break;
      case "5qUcCEhcLf8":
        Script22();
        break;
      case "6PYiiPUfwU2":
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

window.setCodigoDiapositiva(cod_actividad, "NC34U5A01D01");
window.setCodigoDiapositiva(cod_actividad, "NC34U5A01D02");
window.setCodigoDiapositiva(cod_actividad, "NC34U5A01D03");
window.setCodigoDiapositiva(cod_actividad, "NC34U5A01D04");
window.setCodigoDiapositiva(cod_actividad, "NC34U5A01D05");
window.setCodigoDiapositiva(cod_actividad, "NC34U5A01D06");
window.setCodigoDiapositiva(cod_actividad, "NC34U5A01D07");
window.setCodigoDiapositiva(cod_actividad, "NC34U5A01D08");
window.setCodigoDiapositiva(cod_actividad, "NC34U5A01D09");
window.setCodigoDiapositiva(cod_actividad, "NC34U5A01D10");

window.getCodigoDiapositiva(cod_actividad, cod_diapositiva);
window.getIntentos(cod_actividad, cod_diapositiva);

console.log("Inicializa actividades en BD");
}

function Script2()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

var respuesta_01 = window.getRespuesta(cod_actividad, "NC34U5A01D01");
var respuesta_02 = window.getRespuesta(cod_actividad, "NC34U5A01D02");
var respuesta_03 = window.getRespuesta(cod_actividad, "NC34U5A01D03");
var respuesta_04 = window.getRespuesta(cod_actividad, "NC34U5A01D04");
var respuesta_05 = window.getRespuesta(cod_actividad, "NC34U5A01D05");
var respuesta_06 = window.getRespuesta(cod_actividad, "NC34U5A01D06");
var respuesta_07 = window.getRespuesta(cod_actividad, "NC34U5A01D07");
var respuesta_08 = window.getRespuesta(cod_actividad, "NC34U5A01D08");
var respuesta_09 = window.getRespuesta(cod_actividad, "NC34U5A01D09");
var respuesta_10 = window.getRespuesta(cod_actividad, "NC34U5A01D10");

var solucion_01 = window.getEstadoSolucionario(cod_actividad, "NC34U5A01D01");
var solucion_02 = window.getEstadoSolucionario(cod_actividad, "NC34U5A01D02");
var solucion_03 = window.getEstadoSolucionario(cod_actividad, "NC34U5A01D03");
var solucion_04 = window.getEstadoSolucionario(cod_actividad, "NC34U5A01D04");
var solucion_05 = window.getEstadoSolucionario(cod_actividad, "NC34U5A01D05");
var solucion_06 = window.getEstadoSolucionario(cod_actividad, "NC34U5A01D06");
var solucion_07 = window.getEstadoSolucionario(cod_actividad, "NC34U5A01D07");
var solucion_08 = window.getEstadoSolucionario(cod_actividad, "NC34U5A01D08");
var solucion_09 = window.getEstadoSolucionario(cod_actividad, "NC34U5A01D09");
var solucion_10 = window.getEstadoSolucionario(cod_actividad, "NC34U5A01D10");

var intento_01 = window.getIntentos(cod_actividad, "NC34U5A01D01");
var intento_02 = window.getIntentos(cod_actividad, "NC34U5A01D02");
var intento_03 = window.getIntentos(cod_actividad, "NC34U5A01D03");
var intento_04 = window.getIntentos(cod_actividad, "NC34U5A01D04");
var intento_05 = window.getIntentos(cod_actividad, "NC34U5A01D05");
var intento_06 = window.getIntentos(cod_actividad, "NC34U5A01D06");
var intento_07 = window.getIntentos(cod_actividad, "NC34U5A01D07");
var intento_08 = window.getIntentos(cod_actividad, "NC34U5A01D08");
var intento_09 = window.getIntentos(cod_actividad, "NC34U5A01D09");
var intento_10 = window.getIntentos(cod_actividad, "NC34U5A01D10");

var logro_01 = window.getLogro(cod_actividad, "NC34U5A01D01");
var logro_02 = window.getLogro(cod_actividad, "NC34U5A01D02");
var logro_03 = window.getLogro(cod_actividad, "NC34U5A01D03");
var logro_04 = window.getLogro(cod_actividad, "NC34U5A01D04");
var logro_05 = window.getLogro(cod_actividad, "NC34U5A01D05");
var logro_06 = window.getLogro(cod_actividad, "NC34U5A01D06");
var logro_07 = window.getLogro(cod_actividad, "NC34U5A01D07");
var logro_08 = window.getLogro(cod_actividad, "NC34U5A01D08");
var logro_09 = window.getLogro(cod_actividad, "NC34U5A01D09");
var logro_10 = window.getLogro(cod_actividad, "NC34U5A01D10");

console.log("trae info guardada en BD");
}

function Script3()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");
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
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");
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

function Script16()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script17()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");
var respuesta_08 = p.GetVar("respuesta_08");

if (respuesta != respuesta_08) {
  console.log("no es igual");
  window.setIntentos(cod_actividad, cod_diapositiva);
  window.setLogro(cod_actividad, cod_diapositiva, logro);
  window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
} else {
  console.log("es igual");
}

console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script18()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script19()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");
var respuesta_09 = p.GetVar("respuesta_09");

if (respuesta != respuesta_09) {
  console.log("no es igual");
  window.setIntentos(cod_actividad, cod_diapositiva);
  window.setLogro(cod_actividad, cod_diapositiva, logro);
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
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");
var respuesta_10 = p.GetVar("respuesta_10");

if (respuesta != respuesta_10) {
  console.log("no es igual");
  window.setIntentos(cod_actividad, cod_diapositiva);
  window.setLogro(cod_actividad, cod_diapositiva, logro);
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

var respuesta_01 = window.getRespuesta(cod_actividad, "NC34U5A01D01");
var respuesta_02 = window.getRespuesta(cod_actividad, "NC34U5A01D02");
var respuesta_03 = window.getRespuesta(cod_actividad, "NC34U5A01D03");
var respuesta_04 = window.getRespuesta(cod_actividad, "NC34U5A01D04");
var respuesta_05 = window.getRespuesta(cod_actividad, "NC34U5A01D05");
var respuesta_06 = window.getRespuesta(cod_actividad, "NC34U5A01D06");
var respuesta_07 = window.getRespuesta(cod_actividad, "NC34U5A01D07");
var respuesta_08 = window.getRespuesta(cod_actividad, "NC34U5A01D08");
var respuesta_09 = window.getRespuesta(cod_actividad, "NC34U5A01D09");
var respuesta_10 = window.getRespuesta(cod_actividad, "NC34U5A01D10");

var solucion_01 = window.getEstadoSolucionario(cod_actividad, "NC34U5A01D01");
var solucion_02 = window.getEstadoSolucionario(cod_actividad, "NC34U5A01D02");
var solucion_03 = window.getEstadoSolucionario(cod_actividad, "NC34U5A01D03");
var solucion_04 = window.getEstadoSolucionario(cod_actividad, "NC34U5A01D04");
var solucion_05 = window.getEstadoSolucionario(cod_actividad, "NC34U5A01D05");
var solucion_06 = window.getEstadoSolucionario(cod_actividad, "NC34U5A01D06");
var solucion_07 = window.getEstadoSolucionario(cod_actividad, "NC34U5A01D07");
var solucion_08 = window.getEstadoSolucionario(cod_actividad, "NC34U5A01D08");
var solucion_09 = window.getEstadoSolucionario(cod_actividad, "NC34U5A01D09");
var solucion_10 = window.getEstadoSolucionario(cod_actividad, "NC34U5A01D10");

var intento_01 = window.getIntentos(cod_actividad, "NC34U5A01D01");
var intento_02 = window.getIntentos(cod_actividad, "NC34U5A01D02");
var intento_03 = window.getIntentos(cod_actividad, "NC34U5A01D03");
var intento_04 = window.getIntentos(cod_actividad, "NC34U5A01D04");
var intento_05 = window.getIntentos(cod_actividad, "NC34U5A01D05");
var intento_06 = window.getIntentos(cod_actividad, "NC34U5A01D06");
var intento_07 = window.getIntentos(cod_actividad, "NC34U5A01D07");
var intento_08 = window.getIntentos(cod_actividad, "NC34U5A01D08");
var intento_09 = window.getIntentos(cod_actividad, "NC34U5A01D09");
var intento_10 = window.getIntentos(cod_actividad, "NC34U5A01D10");

var logro_01 = window.getLogro(cod_actividad, "NC34U5A01D01");
var logro_02 = window.getLogro(cod_actividad, "NC34U5A01D02");
var logro_03 = window.getLogro(cod_actividad, "NC34U5A01D03");
var logro_04 = window.getLogro(cod_actividad, "NC34U5A01D04");
var logro_05 = window.getLogro(cod_actividad, "NC34U5A01D05");
var logro_06 = window.getLogro(cod_actividad, "NC34U5A01D06");
var logro_07 = window.getLogro(cod_actividad, "NC34U5A01D07");
var logro_08 = window.getLogro(cod_actividad, "NC34U5A01D08");
var logro_09 = window.getLogro(cod_actividad, "NC34U5A01D09");
var logro_10 = window.getLogro(cod_actividad, "NC34U5A01D10");

window.getTotal(cod_actividad);
}

