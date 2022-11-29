function ExecuteScript(strId) {
  switch (strId) {
    case "6UOQJUDBDn8":
      Script1();
      break;
    case "6I6WY67HBJ6":
      Script2();
      break;
    case "5mDILowWyAh":
      Script3();
      break;
    case "5xF4aNW9hwn":
      Script4();
      break;
    case "6FVaZUFilKo":
      Script5();
      break;
    case "5cC1Mcsqg5D":
      Script6();
      break;
    case "688AaXFaDZe":
      Script7();
      break;
    case "5aDVKDqhBUi":
      Script8();
      break;
    case "6FwEReeePll":
      Script9();
      break;
    case "6EulMVMLivl":
      Script10();
      break;
    case "6Qa5SUXnUh6":
      Script11();
      break;
    case "6lGb9mMet6f":
      Script12();
      break;
    case "5mTeS0orVAB":
      Script13();
      break;
    case "6gwzeEuBNqx":
      Script14();
      break;
    case "6TKGYggg8z6":
      Script15();
      break;
  }
}

function Script1() {
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

function Script2() {
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

function Script3() {
  // var p = GetPlayer();
  // var cod_actividad = p.GetVar("cod_actividad");
  // var cod_diapositiva = p.GetVar("cod_diapositiva");
  // var logro = p.GetVar("logro");
  // var respuesta = p.GetVar("respuesta");

  // window.getRespuesta(cod_actividad, cod_diapositiva);

  var p = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");

  //var respuesta_01 = p.GetVar("respuesta_01");
  //var respuesta_01 = window.getRespuesta(cod_actividad, cod_diapositiva);

  console.log("respuesta = " + respuesta);
  console.log("respuesta 01 = " + respuesta_01);
}

function Script4() {
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

function Script5() {
var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script6() {
  // var p = GetPlayer();
  // var cod_actividad = p.GetVar("cod_actividad");
  // var cod_diapositiva = p.GetVar("cod_diapositiva");
  // var logro = p.GetVar("logro");
  // var respuesta = p.GetVar("respuesta");

  // window.getRespuesta(cod_actividad, cod_diapositiva);

  var p = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");

  // var respuesta_02 = p.GetVar("respuesta_02");
  // var respuesta_02 = window.getRespuesta(cod_actividad, cod_diapositiva);

  console.log("respuesta = " + respuesta);
  console.log("respuesta 02 = " + respuesta_02);
}

function Script7() {
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

function Script8() {
  var p = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");

  window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

  console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script9() {
  // var p = GetPlayer();
  // var cod_actividad = p.GetVar("cod_actividad");
  // var cod_diapositiva = p.GetVar("cod_diapositiva");
  // var logro = p.GetVar("logro");
  // var respuesta = p.GetVar("respuesta");

  // window.getRespuesta(cod_actividad, cod_diapositiva);

  var p = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");

  // var respuesta_03 = p.GetVar("respuesta_03");
  // var respuesta_03 = window.getRespuesta(cod_actividad, cod_diapositiva);

  console.log("respuesta = " + respuesta);
  console.log("respuesta 03 = " + respuesta_03);
}

function Script10() {
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

function Script11() {
  var p = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");

  window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

  console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script12() {
  // var p = GetPlayer();
  // var cod_actividad = p.GetVar("cod_actividad");
  // var cod_diapositiva = p.GetVar("cod_diapositiva");
  // var logro = p.GetVar("logro");
  // var respuesta = p.GetVar("respuesta");

  // window.getRespuesta(cod_actividad, cod_diapositiva);

  var p = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");

  // var respuesta_04 = p.GetVar("respuesta_04");
  // var respuesta_04 = window.getRespuesta(cod_actividad, cod_diapositiva);

  console.log("respuesta = " + respuesta);
  console.log("respuesta 04 = " + respuesta_04);
}

function Script13() {
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

function Script14() {
  var p = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");

  window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

  console.log("estado solucionario: ", window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script15() {
var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

var logro_01_ls = Number(localStorage.getItem(cod_actividad + "D01_logro"));
var logro_02_ls = Number(localStorage.getItem(cod_actividad + "D02_logro"));
var logro_03_ls = Number(localStorage.getItem(cod_actividad + "D03_logro"));
var logro_04_ls = Number(localStorage.getItem(cod_actividad + "D04_logro"));
var logro_05_ls = Number(localStorage.getItem(cod_actividad + "D05_logro"));
var logro_06_ls = Number(localStorage.getItem(cod_actividad + "D06_logro"));
var logro_07_ls = Number(localStorage.getItem(cod_actividad + "D07_logro"));
var logro_08_ls = Number(localStorage.getItem(cod_actividad + "D08_logro"));
var logro_09_ls = Number(localStorage.getItem(cod_actividad + "D09_logro"));
var logro_10_ls = Number(localStorage.getItem(cod_actividad + "D10_logro"));

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

window.getIntentos(cod_actividad, "NC34U5A01D01");
window.getIntentos(cod_actividad, "NC34U5A01D02");
window.getIntentos(cod_actividad, "NC34U5A01D03");
window.getIntentos(cod_actividad, "NC34U5A01D04");
window.getIntentos(cod_actividad, "NC34U5A01D05");
window.getIntentos(cod_actividad, "NC34U5A01D06");
window.getIntentos(cod_actividad, "NC34U5A01D07");
window.getIntentos(cod_actividad, "NC34U5A01D08");
window.getIntentos(cod_actividad, "NC34U5A01D09");
window.getIntentos(cod_actividad, "NC34U5A01D10");

p.SetVar("intento_01", Number(localStorage.getItem("NC34U5A01D01_intentos")));
p.SetVar("intento_02", Number(localStorage.getItem("NC34U5A01D02_intentos")));
p.SetVar("intento_03", Number(localStorage.getItem("NC34U5A01D03_intentos")));
p.SetVar("intento_04", Number(localStorage.getItem("NC34U5A01D04_intentos")));
p.SetVar("intento_05", Number(localStorage.getItem("NC34U5A01D05_intentos")));
p.SetVar("intento_06", Number(localStorage.getItem("NC34U5A01D06_intentos")));
p.SetVar("intento_07", Number(localStorage.getItem("NC34U5A01D07_intentos")));
p.SetVar("intento_08", Number(localStorage.getItem("NC34U5A01D08_intentos")));
p.SetVar("intento_09", Number(localStorage.getItem("NC34U5A01D09_intentos")));
p.SetVar("intento_10", Number(localStorage.getItem("NC34U5A01D10_intentos")));

p.SetVar("solucion_01", Boolean(localStorage.getItem("NC34U5A01D01_solucion")));
p.SetVar("solucion_02", Boolean(localStorage.getItem("NC34U5A01D02_solucion")));
p.SetVar("solucion_03", Boolean(localStorage.getItem("NC34U5A01D03_solucion")));
p.SetVar("solucion_04", Boolean(localStorage.getItem("NC34U5A01D04_solucion")));
p.SetVar("solucion_05", Boolean(localStorage.getItem("NC34U5A01D05_solucion")));
p.SetVar("solucion_06", Boolean(localStorage.getItem("NC34U5A01D06_solucion")));
p.SetVar("solucion_07", Boolean(localStorage.getItem("NC34U5A01D07_solucion")));
p.SetVar("solucion_08", Boolean(localStorage.getItem("NC34U5A01D08_solucion")));
p.SetVar("solucion_09", Boolean(localStorage.getItem("NC34U5A01D09_solucion")));
p.SetVar("solucion_10", Boolean(localStorage.getItem("NC34U5A01D10_solucion")));

var sumaLogros = Number(logro_01_ls) + Number(logro_02_ls) + Number(logro_03_ls) + Number(logro_04_ls);
var totalPorcentajes = 400;

var totalLogro = Math.round((sumaLogros / totalPorcentajes) * 100);

localStorage.setItem(cod_actividad + "_totalLogro", String(totalLogro));
console.log("Total logro: ", totalLogro);

p.SetVar("porcentaje_total", Number(localStorage.getItem(cod_actividad + "_totalLogro")));

console.log("Total logro: ", localStorage.getItem(cod_actividad + "_totalLogro"));
}
