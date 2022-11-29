function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5aHCOxL7X8O":
        Script1();
        break;
      case "5wnPTwmtWna":
        Script2();
        break;
      case "5ZlDmterzfU":
        Script3();
        break;
      case "5sRVt4QrrdV":
        Script4();
        break;
      case "64nZUtF1JTF":
        Script5();
        break;
      case "5lAkoMASHNN":
        Script6();
        break;
      case "6NT4gBhXfCM":
        Script7();
        break;
      case "5ZlcVF9Th00":
        Script8();
        break;
      case "6FUCtbFiUS9":
        Script9();
        break;
      case "5pPNoeyhRgX":
        Script10();
        break;
      case "6OT51AUHild":
        Script11();
        break;
      case "6D57XvZoluA":
        Script12();
        break;
      case "6YmW41Jw4hk":
        Script13();
        break;
      case "6YOHGs0WwYT":
        Script14();
        break;
      case "6T25AKkUgxV":
        Script15();
        break;
      case "5oyzn8oiGST":
        Script16();
        break;
      case "5f2WSy1ZEI9":
        Script17();
        break;
      case "6K8O00Fy1Hm":
        Script18();
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
console.log("Inicia actividades");
}

function Script2()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

var respuesta_01 = p.GetVar("respuesta_01");
var respuesta_02 = p.GetVar("respuesta_02");
var respuesta_03 = p.GetVar("respuesta_03");
var respuesta_04 = p.GetVar("respuesta_04");
var respuesta_05 = p.GetVar("respuesta_05");
var respuesta_06 = p.GetVar("respuesta_06");
var respuesta_07 = p.GetVar("respuesta_07");
var respuesta_08 = p.GetVar("respuesta_08");
var respuesta_09 = p.GetVar("respuesta_09");
var respuesta_10 = p.GetVar("respuesta_10");

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

console.log("hola");
}

function Script3()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");

window.getRespuesta(cod_actividad, cod_diapositiva);
}

function Script4()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");
var indice = "";

switch (cod_diapositiva.slice(-2)) {
  case "01":
    var respuesta_diapo = p.GetVar("respuesta_01");
    indice = cod_diapositiva.slice(-2);
    console.log(cod_diapositiva.slice(-2));
    break;
    case "02":
      var respuesta_diapo = p.GetVar("respuesta_02");
      indice = cod_diapositiva.slice(-2);
      console.log(cod_diapositiva.slice(-2));
    break;
  default:
    console.log("default");
}

if (respuesta != respuesta_diapo) {
  console.log("no es igual");
  window.setIntentos(cod_actividad, cod_diapositiva);
  window.setLogro(cod_actividad, cod_diapositiva, logro);
  window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
  respuesta = respuesta_diapo;
  p.SetVar("respuesta_01",respuesta);
} else {
  console.log("es igual");
  //p.SetVar("respuesta",respuesta_diapo);
  respuesta = respuesta_diapo;
  p.SetVar("respuesta_01",respuesta);
}

console.log("intentos: ",window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script5()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script6()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");

window.getRespuesta(cod_actividad, cod_diapositiva);
}

function Script7()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");
var indice = "";

switch (cod_diapositiva.slice(-2)) {
  case "01":
    var respuesta_diapo = p.GetVar("respuesta_01");
    indice = cod_diapositiva.slice(-2);
    console.log(cod_diapositiva.slice(-2));
    break;
    case "02":
      var respuesta_diapo = p.GetVar("respuesta_02");
      indice = cod_diapositiva.slice(-2);
      console.log(cod_diapositiva.slice(-2));
    break;
  default:
    console.log("default");
}

if (respuesta != respuesta_diapo) {
  console.log("no es igual");
  window.setIntentos(cod_actividad, cod_diapositiva);
  window.setLogro(cod_actividad, cod_diapositiva, logro);
  window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
  respuesta = respuesta_diapo;
  p.SetVar("respuesta_01",respuesta);
} else {
  console.log("es igual");
  //p.SetVar("respuesta",respuesta_diapo);
  respuesta = respuesta_diapo;
  p.SetVar("respuesta_01",respuesta);
}

console.log("intentos: ",window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script8()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script9()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");

window.getRespuesta(cod_actividad, cod_diapositiva);
}

function Script10()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");
var indice = "";

switch (cod_diapositiva.slice(-2)) {
  case "01":
    var respuesta_diapo = p.GetVar("respuesta_01");
    indice = cod_diapositiva.slice(-2);
    console.log(cod_diapositiva.slice(-2));
    break;
    case "02":
      var respuesta_diapo = p.GetVar("respuesta_02");
      indice = cod_diapositiva.slice(-2);
      console.log(cod_diapositiva.slice(-2));
    break;
  default:
    console.log("default");
}

if (respuesta != respuesta_diapo) {
  console.log("no es igual");
  window.setIntentos(cod_actividad, cod_diapositiva);
  window.setLogro(cod_actividad, cod_diapositiva, logro);
  window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
  respuesta = respuesta_diapo;
  p.SetVar("respuesta_01",respuesta);
} else {
  console.log("es igual");
  //p.SetVar("respuesta",respuesta_diapo);
  respuesta = respuesta_diapo;
  p.SetVar("respuesta_01",respuesta);
}

console.log("intentos: ",window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script11()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script12()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");
var indice = "";

switch (cod_diapositiva.slice(-2)) {
  case "01":
    var respuesta_diapo = p.GetVar("respuesta_01");
    indice = cod_diapositiva.slice(-2);
    console.log(cod_diapositiva.slice(-2));
    break;
    case "02":
      var respuesta_diapo = p.GetVar("respuesta_02");
      indice = cod_diapositiva.slice(-2);
      console.log(cod_diapositiva.slice(-2));
    break;
  default:
    console.log("default");
}

if (respuesta != respuesta_diapo) {
  console.log("no es igual");
  window.setIntentos(cod_actividad, cod_diapositiva);
  window.setLogro(cod_actividad, cod_diapositiva, logro);
  window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
  respuesta = respuesta_diapo;
  p.SetVar("respuesta_01",respuesta);
} else {
  console.log("es igual");
  //p.SetVar("respuesta",respuesta_diapo);
  respuesta = respuesta_diapo;
  p.SetVar("respuesta_01",respuesta);
}

console.log("intentos: ",window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script13()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");

window.setIntentos(cod_actividad, cod_diapositiva)
window.setLogro(cod_actividad, cod_diapositiva, logro)
window.setRespuesta(cod_actividad, cod_diapositiva, respuesta)

console.log("intentos: ",window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script14()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script15()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");
var indice = "";

switch (cod_diapositiva.slice(-2)) {
  case "01":
    var respuesta_diapo = p.GetVar("respuesta_01");
    indice = cod_diapositiva.slice(-2);
    console.log(cod_diapositiva.slice(-2));
    break;
    case "02":
      var respuesta_diapo = p.GetVar("respuesta_02");
      indice = cod_diapositiva.slice(-2);
      console.log(cod_diapositiva.slice(-2));
    break;
  default:
    console.log("default");
}

if (respuesta != respuesta_diapo) {
  console.log("no es igual");
  window.setIntentos(cod_actividad, cod_diapositiva);
  window.setLogro(cod_actividad, cod_diapositiva, logro);
  window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
  respuesta = respuesta_diapo;
  p.SetVar("respuesta_01",respuesta);
} else {
  console.log("es igual");
  //p.SetVar("respuesta",respuesta_diapo);
  respuesta = respuesta_diapo;
  p.SetVar("respuesta_01",respuesta);
}

console.log("intentos: ",window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script16()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");

window.setIntentos(cod_actividad, cod_diapositiva)
window.setLogro(cod_actividad, cod_diapositiva, logro)
window.setRespuesta(cod_actividad, cod_diapositiva, respuesta)

console.log("intentos: ",window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script17()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script18()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

var logro_01 = p.GetVar("logro_01");
var logro_02 = p.GetVar("logro_02");
var logro_03 = p.GetVar("logro_03");
var logro_04 = p.GetVar("logro_04");
var logro_05 = p.GetVar("logro_05");
var logro_06 = p.GetVar("logro_06");
var logro_07 = p.GetVar("logro_07");
var logro_08 = p.GetVar("logro_08");
var logro_09 = p.GetVar("logro_09");
var logro_10 = p.GetVar("logro_10");

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

var intento_01 = p.GetVar("intento_01");
var intento_02 = p.GetVar("intento_02");
var intento_03 = p.GetVar("intento_03");
var intento_04 = p.GetVar("intento_04");
var intento_05 = p.GetVar("intento_05");
var intento_06 = p.GetVar("intento_06");
var intento_07 = p.GetVar("intento_07");
var intento_08 = p.GetVar("intento_08");
var intento_09 = p.GetVar("intento_09");
var intento_10 = p.GetVar("intento_10");

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

var solucion_01 = p.GetVar("solucion_01");
var solucion_02 = p.GetVar("solucion_02");
var solucion_03 = p.GetVar("solucion_03");
var solucion_04 = p.GetVar("solucion_04");
var solucion_05 = p.GetVar("solucion_05");
var solucion_06 = p.GetVar("solucion_06");
var solucion_07 = p.GetVar("solucion_07");
var solucion_08 = p.GetVar("solucion_08");
var solucion_09 = p.GetVar("solucion_09");
var solucion_10 = p.GetVar("solucion_10");

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
}

