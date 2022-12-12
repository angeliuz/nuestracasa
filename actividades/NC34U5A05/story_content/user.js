function ExecuteScript(strId)
{
  switch (strId)
  {
      case "61nE6rnPa8A":
        Script1();
        break;
      case "5jExuLXBzOz":
        Script2();
        break;
      case "65qTfuse0V3":
        Script3();
        break;
      case "6jK7X9szoL4":
        Script4();
        break;
      case "622lDYD4qNo":
        Script5();
        break;
      case "634fmoL0FVb":
        Script6();
        break;
      case "6iOGhSpmh2U":
        Script7();
        break;
      case "6aoosg2OM2o":
        Script8();
        break;
      case "6P168uPs1re":
        Script9();
        break;
      case "6aJegFQQiMo":
        Script10();
        break;
      case "5WIEOpBWz03":
        Script11();
        break;
      case "6kLQkV8fe6S":
        Script12();
        break;
      case "6PDvMMD7ee9":
        Script13();
        break;
      case "5nLW9WC4vG0":
        Script14();
        break;
      case "6ZmqIDAK7Ij":
        Script15();
        break;
      case "6AlrECVeUEj":
        Script16();
        break;
      case "5dBc5Cx3YmT":
        Script17();
        break;
      case "5wRwVk5tGuZ":
        Script18();
        break;
      case "65g4DgYDMGD":
        Script19();
        break;
      case "5qkZXWZrcRi":
        Script20();
        break;
      case "5i3B9yar6rV":
        Script21();
        break;
      case "5grf9cm2SNa":
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
var arrastre1 = p.GetVar("arrastre1");
var arrastre2 = p.GetVar("arrastre2");
var arrastre3 = p.GetVar("arrastre3");
var arrastre4 = p.GetVar("arrastre4");
var arrastre5 = p.GetVar("arrastre5");
var arrastre6 = p.GetVar("arrastre6");
var arrastre7 = p.GetVar("arrastre7");
var respuesta = p.GetVar("arrastre1, arrastre2, arrastre3, arrastre4, arrastre5, arrastre6, arrastre7");
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
var Entradadetexto = p.GetVar("Entradadetexto");
var Entradadetexto1 = p.GetVar("Entradadetexto1");
var respuesta = [Entradadetexto,Entradadetexto1];
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
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
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
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var Entradadetexto2 = p.GetVar("Entradadetexto2");
var Entradadetexto3 = p.GetVar("Entradadetexto3");
var Entradadetexto4 = p.GetVar("Entradadetexto4");
var respuesta = [Entradadetexto2, Entradadetexto3, Entradadetexto4];
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

function Script19()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script20()
{
  var p = GetPlayer();
player = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var Entradadetexto5 = p.GetVar("Entradadetexto5");
var Entradadetexto6 = p.GetVar("Entradadetexto6");
var Entradadetexto7 = p.GetVar("Entradadetexto7");
var Entradadetexto8 = p.GetVar("Entradadetexto8");
var Entradadetexto9 = p.GetVar("Entradadetexto9");
var respuesta = [Entradadetexto5, Entradadetexto6, Entradadetexto7, Entradadetexto8, Entradadetexto9];
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

function Script21()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script22()
{
  var p = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");

  var logro_01_ls = String(localStorage.getItem(cod_actividad + "D01_logro"));
  var logro_02_ls = String(localStorage.getItem(cod_actividad + "D02_logro"));
  var logro_03_ls = String(localStorage.getItem(cod_actividad + "D03_logro"));
  var logro_04_ls = String(localStorage.getItem(cod_actividad + "D04_logro"));
  var logro_05_ls = String(localStorage.getItem(cod_actividad + "D05_logro"));
  var logro_06_ls = String(localStorage.getItem(cod_actividad + "D06_logro"));
  var logro_07_ls = String(localStorage.getItem(cod_actividad + "D07_logro"));
  var logro_08_ls = String(localStorage.getItem(cod_actividad + "D08_logro"));
  var logro_09_ls = String(localStorage.getItem(cod_actividad + "D09_logro"));
  var logro_10_ls = String(localStorage.getItem(cod_actividad + "D10_logro"));

  p.SetVar("logro_01", localStorage.getItem("NC34U5A01D01_logro"));
  p.SetVar("logro_02", localStorage.getItem("NC34U5A01D02_logro"));
  p.SetVar("logro_03", localStorage.getItem("NC34U5A01D03_logro"));
  p.SetVar("logro_04", localStorage.getItem("NC34U5A01D04_logro"));
  p.SetVar("logro_05", localStorage.getItem("NC34U5A01D05_logro"));
  p.SetVar("logro_06", localStorage.getItem("NC34U5A01D06_logro"));
  p.SetVar("logro_07", localStorage.getItem("NC34U5A01D07_logro"));
  p.SetVar("logro_08", localStorage.getItem("NC34U5A01D08_logro"));
  p.SetVar("logro_09", localStorage.getItem("NC34U5A01D09_logro"));
  p.SetVar("logro_10", localStorage.getItem("NC34U5A01D10_logro"));

  p.SetVar("intento_01", localStorage.getItem("NC34U5A01D01_intentos"));
  p.SetVar("intento_02", localStorage.getItem("NC34U5A01D02_intentos"));
  p.SetVar("intento_03", localStorage.getItem("NC34U5A01D03_intentos"));
  p.SetVar("intento_04", localStorage.getItem("NC34U5A01D04_intentos"));
  p.SetVar("intento_05", localStorage.getItem("NC34U5A01D05_intentos"));
  p.SetVar("intento_06", localStorage.getItem("NC34U5A01D06_intentos"));
  p.SetVar("intento_07", localStorage.getItem("NC34U5A01D07_intentos"));
  p.SetVar("intento_08", localStorage.getItem("NC34U5A01D08_intentos"));
  p.SetVar("intento_09", localStorage.getItem("NC34U5A01D09_intentos"));
  p.SetVar("intento_10", localStorage.getItem("NC34U5A01D10_intentos"));

  p.SetVar("solucion_01", localStorage.getItem("NC34U5A01D01_solucion"));
  p.SetVar("solucion_02", localStorage.getItem("NC34U5A01D02_solucion"));
  p.SetVar("solucion_03", localStorage.getItem("NC34U5A01D03_solucion"));
  p.SetVar("solucion_04", localStorage.getItem("NC34U5A01D04_solucion"));
  p.SetVar("solucion_05", localStorage.getItem("NC34U5A01D05_solucion"));
  p.SetVar("solucion_06", localStorage.getItem("NC34U5A01D06_solucion"));
  p.SetVar("solucion_07", localStorage.getItem("NC34U5A01D07_solucion"));
  p.SetVar("solucion_08", localStorage.getItem("NC34U5A01D08_solucion"));
  p.SetVar("solucion_09", localStorage.getItem("NC34U5A01D09_solucion"));
  p.SetVar("solucion_10", localStorage.getItem("NC34U5A01D10_solucion"));


  var sumaLogros = Number(logro_01_ls) + Number(logro_02_ls) + Number(logro_03_ls) + Number(logro_04_ls);
  var totalPorcentajes = 400;

  p.SetVar("porcentaje_total", Math.round((sumaLogros / totalPorcentajes) * 100).toString());

  console.log("Total porcentaje: ", Math.round((sumaLogros / totalPorcentajes) * 100));
}

