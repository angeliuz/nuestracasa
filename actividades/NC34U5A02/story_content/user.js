function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6TYAlDJXdX2":
        Script1();
        break;
      case "5w8P7IMEJLW":
        Script2();
        break;
      case "5jqvlSrKZyx":
        Script3();
        break;
      case "67KaaFyDihI":
        Script4();
        break;
      case "6Gc3IuwHItF":
        Script5();
        break;
      case "6juGH2z2PO8":
        Script6();
        break;
      case "66AzCFX0SdW":
        Script7();
        break;
      case "6UKb93loYxE":
        Script8();
        break;
      case "5ZIrnSGc4cn":
        Script9();
        break;
      case "5Vu1AHG3T7m":
        Script10();
        break;
      case "5uyMIjxi90u":
        Script11();
        break;
      case "6ElNT651nqH":
        Script12();
        break;
      case "5xvK3qXNuoy":
        Script13();
        break;
      case "5W0FTI3Jrbb":
        Script14();
        break;
      case "68oPJ8WEjbK":
        Script15();
        break;
      case "60MJHBIuBoZ":
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
var drag1 = p.GetVar("drag1");
var drag2 = p.GetVar("drag2");
var drag3 = p.GetVar("drag3");
var drag4 = p.GetVar("drag4");

var respuesta_01 = window.getRespuesta(cod_actividad, cod_actividad+"D01");
var respuesta_02 = window.getRespuesta(cod_actividad, cod_actividad+"D02");
var respuesta_03 = window.getRespuesta(cod_actividad, cod_actividad+"D03");
var respuesta_04 = window.getRespuesta(cod_actividad, cod_actividad+"D04");
var respuesta_05 = window.getRespuesta(cod_actividad, cod_actividad+"D05");
var respuesta_06 = window.getRespuesta(cod_actividad, cod_actividad+"D06");
var respuesta_07 = window.getRespuesta(cod_actividad, cod_actividad+"D07");

console.log(respuesta_01);
console.log("respuesta_01");
console.log(respuesta_01[0]);
var drag1 = respuesta_01[0];

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

console.log("trae info guardada en BD");
console.log("respuesta_01 "+respuesta_01[0]);
}

function Script3()
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
var drag1 = p.GetVar("drag1");
var drag2 = p.GetVar("drag2");
var drag3 = p.GetVar("drag3");
var drag4 = p.GetVar("drag4");
var respuesta = [drag1,drag2,drag3,drag4];
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
var drag1 = p.GetVar("drag1");
var drag2 = p.GetVar("drag2");
var drag3 = p.GetVar("drag3");
var drag4 = p.GetVar("drag4");
var respuesta = [drag1,drag2,drag3,drag4];
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
var Entradadetexto = p.GetVar("Entradadetexto");
var Entradadetexto1 = p.GetVar("Entradadetexto1");
var Entradadetexto2 = p.GetVar("Entradadetexto2");
var respuesta = [Entradadetexto,Entradadetexto1,Entradadetexto2];
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
var Entradadetexto3 = p.GetVar("Entradadetexto3");
var Entradadetexto4 = p.GetVar("Entradadetexto4");
var Entradadetexto5 = p.GetVar("Entradadetexto5");
var respuesta = [Entradadetexto3,Entradadetexto4,Entradadetexto5];
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

window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
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
var respuesta_06 = window.getRespuesta(cod_actividad, cod_actividad+"D06");
var respuesta_07 = window.getRespuesta(cod_actividad, cod_actividad+"D07");
var respuesta_08 = window.getRespuesta(cod_actividad, cod_actividad+"D08");

var solucion_01 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D01");
var solucion_02 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D02");
var solucion_03 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D03");
var solucion_04 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D04");
var solucion_05 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D05");
var solucion_06 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D06");
var solucion_07 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D07");
var solucion_08 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D08");

var intento_01 = window.getIntentos(cod_actividad, cod_actividad+"D01");
var intento_02 = window.getIntentos(cod_actividad, cod_actividad+"D02");
var intento_03 = window.getIntentos(cod_actividad, cod_actividad+"D03");
var intento_04 = window.getIntentos(cod_actividad, cod_actividad+"D04");
var intento_05 = window.getIntentos(cod_actividad, cod_actividad+"D05");
var intento_06 = window.getIntentos(cod_actividad, cod_actividad+"D06");
var intento_07 = window.getIntentos(cod_actividad, cod_actividad+"D07");
var intento_08 = window.getIntentos(cod_actividad, cod_actividad+"D08");

var logro_01 = window.getLogro(cod_actividad, cod_actividad+"D01");
var logro_02 = window.getLogro(cod_actividad, cod_actividad+"D02");
var logro_03 = window.getLogro(cod_actividad, cod_actividad+"D03");
var logro_04 = window.getLogro(cod_actividad, cod_actividad+"D04");
var logro_05 = window.getLogro(cod_actividad, cod_actividad+"D05");
var logro_06 = window.getLogro(cod_actividad, cod_actividad+"D06");
var logro_07 = window.getLogro(cod_actividad, cod_actividad+"D07");
var logro_08 = window.getLogro(cod_actividad, cod_actividad+"D08");

window.getTotal(cod_actividad,7);
}

