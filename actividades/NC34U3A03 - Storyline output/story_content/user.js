function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6V6IzkpfuCS":
        Script1();
        break;
      case "67ekTjDbWnr":
        Script2();
        break;
      case "6kgkqClCx8N":
        Script3();
        break;
      case "5rscDXk1YJW":
        Script4();
        break;
      case "60tDSJheDMb":
        Script5();
        break;
      case "6m0XqZzVA37":
        Script6();
        break;
      case "6gJDn1P1FKq":
        Script7();
        break;
      case "5hQFa5imuLP":
        Script8();
        break;
      case "66pxzclEgWE":
        Script9();
        break;
      case "5WsdbQH2zEu":
        Script10();
        break;
      case "5cbKK7JMHAW":
        Script11();
        break;
      case "67va9WDsbXx":
        Script12();
        break;
      case "5dszIdkbayV":
        Script13();
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
window.setCodigoDiapositiva(cod_actividad, cod_actividad+"D03");



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
var respuesta_03 = window.getRespuesta(cod_actividad, cod_actividad+"D03");


var solucion_01 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D01");
var solucion_03 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D03");


var intento_01 = window.getIntentos(cod_actividad, cod_actividad+"D01");
var intento_03 = window.getIntentos(cod_actividad, cod_actividad+"D03");


var logro_01 = window.getLogro(cod_actividad, cod_actividad+"D01");
var logro_03 = window.getLogro(cod_actividad, cod_actividad+"D03");


window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "texto1", 1);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "texto2", 2);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "texto3", 3);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "texto4", 4);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "texto5", 5);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "texto6", 6);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "texto7", 7);
window.getRespuestaMultiple(cod_actividad, cod_actividad+"D01", "texto8", 8);



console.log("trae info guardada en BD");
}

function Script3()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

var texto7 = localStorage.getItem(cod_diapositiva + "_texto7");
var texto8 = localStorage.getItem(cod_diapositiva + "_texto8");
var texto9 = localStorage.getItem(cod_diapositiva + "_texto9");

console.log(texto7,texto8,texto9);
}

function Script4()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var texto7 = p.GetVar("texto7");
var texto8 = p.GetVar("texto8");
var texto9 = p.GetVar("texto9");
var respuesta = [texto7,texto8,texto9];
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
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

var texto7 = localStorage.getItem(cod_diapositiva + "_texto7");
var texto8 = localStorage.getItem(cod_diapositiva + "_texto8");
var texto9 = localStorage.getItem(cod_diapositiva + "_texto9");

console.log(texto7,texto8,texto9);
}

function Script7()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script8()
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

function Script9()
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

var texto10 = localStorage.getItem(cod_diapositiva + "_texto10");
var texto11 = localStorage.getItem(cod_diapositiva + "_texto11");
var texto12 = localStorage.getItem(cod_diapositiva + "_texto12");

console.log(texto10,texto11,texto12);
}

function Script12()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script13()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

var respuesta_01 = window.getRespuesta(cod_actividad, cod_actividad+"D01");

var respuesta_03 = window.getRespuesta(cod_actividad, cod_actividad+"D03");


var solucion_01 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D01");

var solucion_03 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D03");


var intento_01 = window.getIntentos(cod_actividad, cod_actividad+"D01");

var intento_03 = window.getIntentos(cod_actividad, cod_actividad+"D03");

var logro_01 = window.getLogro(cod_actividad, cod_actividad+"D01");

var logro_03 = window.getLogro(cod_actividad, cod_actividad+"D03");


var arrDiapos = ["D06","D09","D10","D11","D12","D13","D14"];

window.getTotal(cod_actividad,arrDiapos);
}

