function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5a7O2FqwRwA":
        Script1();
        break;
      case "6YDs0us5eGL":
        Script2();
        break;
      case "6aYGZ0CZZQ8":
        Script3();
        break;
      case "5qziLY5HQok":
        Script4();
        break;
      case "65XwKjNRBfk":
        Script5();
        break;
      case "6ow9GvGttwM":
        Script6();
        break;
      case "6ii5Npw96EW":
        Script7();
        break;
      case "5wmB4HxtbON":
        Script8();
        break;
      case "6CecyLq8tYx":
        Script9();
        break;
      case "5aP5AV5LfeR":
        Script10();
        break;
      case "5ZDkZSaN54h":
        Script11();
        break;
      case "6gOCGlh5l37":
        Script12();
        break;
      case "5woXBqCESEM":
        Script13();
        break;
      case "6H8ERpCQtig":
        Script14();
        break;
      case "68djFxyAHeM":
        Script15();
        break;
      case "5h0o5bNaFWD":
        Script16();
        break;
      case "5W5aGOSdIfC":
        Script17();
        break;
      case "5b17GZEzX7T":
        Script18();
        break;
      case "5iDiUqwWlkW":
        Script19();
        break;
      case "5YzJPunvmU1":
        Script20();
        break;
      case "5yyDGI7Pvkj":
        Script21();
        break;
      case "6NFqmO6BBpR":
        Script22();
        break;
      case "5f1V0Zu3CtL":
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
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

// var respuesta_01 = p.GetVar("respuesta_01");
// var respuesta_02 = p.GetVar("respuesta_02");
// var respuesta_03 = p.GetVar("respuesta_03");
// var respuesta_04 = p.GetVar("respuesta_04");
// var respuesta_05 = p.GetVar("respuesta_05");
// var respuesta_06 = p.GetVar("respuesta_06");
// var respuesta_07 = p.GetVar("respuesta_07");
// var respuesta_08 = p.GetVar("respuesta_08");
// var respuesta_09 = p.GetVar("respuesta_09");
// var respuesta_10 = p.GetVar("respuesta_10");

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

console.log("trae respuesta guardadas en BD");
}

function Script3()
{
  var p = GetPlayer();
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
  //respuesta = respuesta_01;
  //p.SetVar("respuesta_01",respuesta);
} else {
  console.log("es igual");
  //p.SetVar("respuesta",respuesta_diapo);
  //respuesta = respuesta_01;
  //p.SetVar("respuesta_01",respuesta);
}

console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script4()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script5()
{
  var p = GetPlayer();
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
  //respuesta = respuesta_02;
  //p.SetVar("respuesta_02",respuesta);
} else {
  console.log("es igual");
  //p.SetVar("respuesta",respuesta_diapo);
  //respuesta = respuesta_02;
  //p.SetVar("respuesta_02",respuesta);
}

console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script6()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script7()
{
  var p = GetPlayer();
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
  //respuesta = respuesta_03;
  //p.SetVar("respuesta_03",respuesta);
} else {
  console.log("es igual");
  //p.SetVar("respuesta",respuesta_diapo);
  //respuesta = respuesta_03;
  //p.SetVar("respuesta_03",respuesta);
}

console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script8()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script9()
{
  var p = GetPlayer();
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
  //respuesta = respuesta_04;
  //p.SetVar("respuesta_04",respuesta);
} else {
  console.log("es igual");
  //p.SetVar("respuesta",respuesta_diapo);
  //respuesta = respuesta_04;
  //p.SetVar("respuesta_04",respuesta);
}

console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script10()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script11()
{
  var p = GetPlayer();
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
  //respuesta = respuesta_05;
  //p.SetVar("respuesta_05",respuesta);
} else {
  console.log("es igual");
  //p.SetVar("respuesta",respuesta_diapo);
  //respuesta = respuesta_05;
  //p.SetVar("respuesta_05",respuesta);
}

console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script12()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script13()
{
  var p = GetPlayer();
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
  //respuesta = respuesta_06;
  //p.SetVar("respuesta_06",respuesta);
} else {
  console.log("es igual");
  //p.SetVar("respuesta",respuesta_diapo);
  //respuesta = respuesta_06;
  //p.SetVar("respuesta_06",respuesta);
}

console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script14()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script15()
{
  var p = GetPlayer();
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
  //respuesta = respuesta_07;
  //p.SetVar("respuesta_07",respuesta);
} else {
  console.log("es igual");
  //p.SetVar("respuesta",respuesta_diapo);
  //respuesta = respuesta_07;
  //p.SetVar("respuesta_07",respuesta);
}

console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script16()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script17()
{
  var p = GetPlayer();
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
  //respuesta = respuesta_08;
  //p.SetVar("respuesta_08",respuesta);
} else {
  console.log("es igual");
  //p.SetVar("respuesta",respuesta_diapo);
  //respuesta = respuesta_08;
  //p.SetVar("respuesta_08",respuesta);
}

console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script18()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script19()
{
  var p = GetPlayer();
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
  //respuesta = respuesta_09;
  //p.SetVar("respuesta_09",respuesta);
} else {
  console.log("es igual");
  //p.SetVar("respuesta",respuesta_diapo);
  //respuesta = respuesta_09;
  //p.SetVar("respuesta_09",respuesta);
}

console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script20()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script21()
{
  var p = GetPlayer();
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
  //respuesta = respuesta_10;
  //p.SetVar("respuesta_10",respuesta);
} else {
  console.log("es igual");
  //p.SetVar("respuesta",respuesta_diapo);
  //respuesta = respuesta_10;
  //p.SetVar("respuesta_10",respuesta);
}

console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script22()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script23()
{
  var p = GetPlayer();
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

var logro_01_ls = window.getLogro(cod_actividad, "NC34U5A01D01");
var logro_02_ls = window.getLogro(cod_actividad, "NC34U5A01D02");
var logro_03_ls = window.getLogro(cod_actividad, "NC34U5A01D03");
var logro_04_ls = window.getLogro(cod_actividad, "NC34U5A01D04");
var logro_05_ls = window.getLogro(cod_actividad, "NC34U5A01D05");
var logro_06_ls = window.getLogro(cod_actividad, "NC34U5A01D06");
var logro_07_ls = window.getLogro(cod_actividad, "NC34U5A01D07");
var logro_08_ls = window.getLogro(cod_actividad, "NC34U5A01D08");
var logro_09_ls = window.getLogro(cod_actividad, "NC34U5A01D09");
var logro_10_ls = window.getLogro(cod_actividad, "NC34U5A01D10");

console.log("trae respuesta guardadas en BD");

var sumaLogros = Number(logro_01_ls) + Number(logro_02_ls) + Number(logro_03_ls) + Number(logro_04_ls) + Number(logro_05_ls) + Number(logro_06_ls) + Number(logro_07_ls) + Number(logro_08_ls) + Number(logro_09_ls) + Number(logro_10_ls);
var totalPorcentajes = 1000;

var totalLogro = Math.round((sumaLogros / totalPorcentajes) * 100);

localStorage.setItem(cod_actividad + "_totalLogro", String(totalLogro));
console.log("Total logro: ", totalLogro);

p.SetVar("porcentaje_total", Number(localStorage.getItem(cod_actividad + "_totalLogro")));

console.log("Total logro: ", localStorage.getItem(cod_actividad + "_totalLogro"));
}

