function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6f10Y2etIgH":
        Script1();
        break;
      case "5tze5ZXMWRn":
        Script2();
        break;
      case "5xUn99AOWbt":
        Script3();
        break;
      case "6eoUjJ3clfN":
        Script4();
        break;
      case "6MOKWJeJ3zk":
        Script5();
        break;
      case "6HU9y4fkLve":
        Script6();
        break;
      case "6DhXZdVL80M":
        Script7();
        break;
      case "5vMogW1BBTJ":
        Script8();
        break;
      case "68rCtzjET37":
        Script9();
        break;
      case "5ZlM5pPGjvX":
        Script10();
        break;
      case "5unlUomxrR8":
        Script11();
        break;
      case "6mzd0JABg3o":
        Script12();
        break;
      case "6ILgQwSGODc":
        Script13();
        break;
      case "6BYlFDOEUbe":
        Script14();
        break;
      case "6NXjqpdRS73":
        Script15();
        break;
      case "6D3KmSR1OYq":
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

var solucion_01 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D01");
var solucion_02 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D02");
var solucion_03 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D03");
var solucion_04 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D04");
var solucion_05 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D05");
var solucion_06 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D06");

var intento_01 = window.getIntentos(cod_actividad, cod_actividad+"D01");
var intento_02 = window.getIntentos(cod_actividad, cod_actividad+"D02");
var intento_03 = window.getIntentos(cod_actividad, cod_actividad+"D03");
var intento_04 = window.getIntentos(cod_actividad, cod_actividad+"D04");
var intento_05 = window.getIntentos(cod_actividad, cod_actividad+"D05");
var intento_06 = window.getIntentos(cod_actividad, cod_actividad+"D06");

var logro_01 = window.getLogro(cod_actividad, cod_actividad+"D01");
var logro_02 = window.getLogro(cod_actividad, cod_actividad+"D02");
var logro_03 = window.getLogro(cod_actividad, cod_actividad+"D03");
var logro_04 = window.getLogro(cod_actividad, cod_actividad+"D04");
var logro_05 = window.getLogro(cod_actividad, cod_actividad+"D05");
var logro_06 = window.getLogro(cod_actividad, cod_actividad+"D06");

window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag1", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag2", 2);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag3", 3);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag4", 4);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag5", 5);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag6", 6);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag7", 7);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "drag8", 8);

window.getRespuestaMultiple(cod_actividad, cod_actividad+"D02", "texto1", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D02", "texto2", 2);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D02", "texto3", 3);

window.getRespuestaMultiple(cod_actividad, cod_actividad+"D04", "multi1", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D04", "multi2", 2);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D04", "multi3", 3);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D04", "multi4", 4);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D04", "multi5", 5);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D04", "multi6", 6);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D04", "multi7", 7);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D04", "multi8", 8);

window.getRespuestaMultiple(cod_actividad, cod_actividad+"D06", "multi9", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D06", "multi10", 2);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D06", "multi11", 3);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D06", "multi12", 4);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D06", "multi13", 5);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D06", "multi14", 6);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D06", "multi15", 7);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D06", "multi16", 8);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D06", "multi17", 9);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D06", "multi18", 10);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D06", "multi19", 11);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D06", "multi20", 12);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D06", "multi21", 13);


console.log("trae info guardada en BD");
}

function Script3()
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
var respuesta = [drag1,drag2,drag3,drag4,drag5,drag6,drag7,drag8];
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
var texto1 = p.GetVar("texto1");
var texto2 = p.GetVar("texto2");
var texto3 = p.GetVar("texto3");

var respuesta = [texto1,texto2,texto3];
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

function Script7()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
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

var multi1 = localStorage.getItem(cod_diapositiva + "_multi1");
var multi2 = localStorage.getItem(cod_diapositiva + "_multi2");
var multi3 = localStorage.getItem(cod_diapositiva + "_multi3");
var multi4 = localStorage.getItem(cod_diapositiva + "_multi4");
var multi5 = localStorage.getItem(cod_diapositiva + "_multi5");
var multi6 = localStorage.getItem(cod_diapositiva + "_multi6");
var multi7 = localStorage.getItem(cod_diapositiva + "_multi7");
var multi8 = localStorage.getItem(cod_diapositiva + "_multi8");

console.log(multi1,multi2,multi3,multi4,multi5,multi6,multi7,multi8);
}

function Script10()
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
var multi8 = p.GetVar("multi8");
var respuesta = [multi1,multi2,multi3,multi4,multi5,multi6,multi7,multi8];
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

window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script13()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

var multi9 = localStorage.getItem(cod_diapositiva + "_multi9");
var multi10 = localStorage.getItem(cod_diapositiva + "_multi10");
var multi11 = localStorage.getItem(cod_diapositiva + "_multi11");
var multi12 = localStorage.getItem(cod_diapositiva + "_multi12");
var multi13 = localStorage.getItem(cod_diapositiva + "_multi13");
var multi14 = localStorage.getItem(cod_diapositiva + "_multi14");
var multi15 = localStorage.getItem(cod_diapositiva + "_multi15");
var multi16 = localStorage.getItem(cod_diapositiva + "_multi16");
var multi17 = localStorage.getItem(cod_diapositiva + "_multi17");
var multi18 = localStorage.getItem(cod_diapositiva + "_multi18");
var multi19 = localStorage.getItem(cod_diapositiva + "_multi19");
var multi20 = localStorage.getItem(cod_diapositiva + "_multi20");
var multi21 = localStorage.getItem(cod_diapositiva + "_multi21");

console.log(multi9,multi10,multi11,multi12,multi13,multi14,multi15,multi16,multi17,multi18,multi19,multi20,multi21);
}

function Script14()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var logro = p.GetVar("logro");
var multi9 = p.GetVar("multi9");
var multi10 = p.GetVar("multi10");
var multi11 = p.GetVar("multi11");
var multi12 = p.GetVar("multi12");
var multi13 = p.GetVar("multi13");
var multi14 = p.GetVar("multi14");
var multi15 = p.GetVar("multi15");
var multi16 = p.GetVar("multi16");
var multi17 = p.GetVar("multi17");
var multi18 = p.GetVar("multi18");
var multi19 = p.GetVar("multi19");
var multi20 = p.GetVar("multi20");
var multi21 = p.GetVar("multi21");
var respuesta = [multi9,multi10,multi11,multi12,multi13,multi14,multi15,multi16,multi17,multi18,multi19,multi20,multi21];
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

var solucion_01 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D01");
var solucion_02 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D02");
var solucion_03 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D03");
var solucion_04 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D04");
var solucion_05 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D05");
var solucion_06 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D06");

var intento_01 = window.getIntentos(cod_actividad, cod_actividad+"D01");
var intento_02 = window.getIntentos(cod_actividad, cod_actividad+"D02");
var intento_03 = window.getIntentos(cod_actividad, cod_actividad+"D03");
var intento_04 = window.getIntentos(cod_actividad, cod_actividad+"D04");
var intento_05 = window.getIntentos(cod_actividad, cod_actividad+"D05");
var intento_06 = window.getIntentos(cod_actividad, cod_actividad+"D06");

var logro_01 = window.getLogro(cod_actividad, cod_actividad+"D01");
var logro_02 = window.getLogro(cod_actividad, cod_actividad+"D02");
var logro_03 = window.getLogro(cod_actividad, cod_actividad+"D03");
var logro_04 = window.getLogro(cod_actividad, cod_actividad+"D04");
var logro_05 = window.getLogro(cod_actividad, cod_actividad+"D05");
var logro_06 = window.getLogro(cod_actividad, cod_actividad+"D06");

var arrDiapos = ["D01","D04","D06"];

window.getTotal(cod_actividad,arrDiapos);
}

