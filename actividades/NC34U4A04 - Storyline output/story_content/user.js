function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6nHUGukIOGO":
        Script1();
        break;
      case "6Vyqi2PTasC":
        Script2();
        break;
      case "5jBsnqhKbMg":
        Script3();
        break;
      case "5i72RmJzR38":
        Script4();
        break;
      case "6mMiCfYWc1j":
        Script5();
        break;
      case "6auqiHvS6dq":
        Script6();
        break;
      case "6eAqcQN8B8d":
        Script7();
        break;
      case "66mp9Mx5j1x":
        Script8();
        break;
      case "6QDd6gw4rcH":
        Script9();
        break;
      case "6WPyQAMM4fI":
        Script10();
        break;
      case "5ddqdDnI0cM":
        Script11();
        break;
      case "615pfyQx4zv":
        Script12();
        break;
      case "5YREOdWCd3U":
        Script13();
        break;
      case "6XojkuGQJ4a":
        Script14();
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

window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag1", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag2", 2);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag3", 3);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag4", 4);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag5", 5);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag6", 6);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag7", 7);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag8", 8);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag9", 9);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag10", 10);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag11", 11);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag12", 12);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag13", 13);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag14", 14);

window.getRespuestaMultiple(cod_actividad, cod_actividad+"D03", "texto1", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D03", "texto2", 2);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D03", "texto3", 3);

window.getRespuestaMultiple(cod_actividad, cod_actividad+"D05", "multi1", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D05", "multi2", 2);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D05", "multi3", 3);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D05", "multi4", 4);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D05", "multi5", 5);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D05", "multi6", 6);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D05", "multi7", 7);


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
var drag5 = localStorage.getItem(cod_diapositiva + "_drag5")
var drag6 = localStorage.getItem(cod_diapositiva + "_drag6")
var drag7 = localStorage.getItem(cod_diapositiva + "_drag7")
var drag8 = localStorage.getItem(cod_diapositiva + "_drag8")
var drag9 = localStorage.getItem(cod_diapositiva + "_drag9")
var drag10 = localStorage.getItem(cod_diapositiva + "_drag10")
var drag11 = localStorage.getItem(cod_diapositiva + "_drag11")
var drag12 = localStorage.getItem(cod_diapositiva + "_drag12")
var drag13 = localStorage.getItem(cod_diapositiva + "_drag13")
var drag14 = localStorage.getItem(cod_diapositiva + "_drag14")

console.log(drag1,drag2,drag3,drag4,drag5,drag6,drag7,drag8,drag9,drag10,drag11,drag12,drag13,drag14);
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
var drag5 = p.GetVar("drag5");
var drag6 = p.GetVar("drag6");
var drag7 = p.GetVar("drag7");
var drag8 = p.GetVar("drag8");
var drag9 = p.GetVar("drag9");
var drag10 = p.GetVar("drag10");
var drag11 = p.GetVar("drag11");
var drag12 = p.GetVar("drag12");
var drag13 = p.GetVar("drag13");
var drag14 = p.GetVar("drag14");
var respuesta = [drag1,drag2,drag3,drag4,drag5,drag6,drag7,drag8,drag9,drag10,drag11,drag12,drag13,drag14];
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

window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script7()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

var texto1 = localStorage.getItem(cod_diapositiva + "_texto1");
var texto2 = localStorage.getItem(cod_diapositiva + "_texto2");
var texto3 = localStorage.getItem(cod_diapositiva + "_texto3");

console.log(texo1,texto2,texto3);
}

function Script8()
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
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script11()
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
var multi7 = localStorage.getItem(cod_diapositiva + "_multi7");

console.log(multi1,multi2,multi3,multi4,multi5,multi6,multi7);
}

function Script12()
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
var multi7 = p.GetVar("multi7");
var respuesta = [multi1,multi2,multi3,multi4,multi5,multi6,multi7];
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

function Script13()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script14()
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

var arrDiapos = ["D01","D05"];

window.getTotal(cod_actividad,arrDiapos);
}

