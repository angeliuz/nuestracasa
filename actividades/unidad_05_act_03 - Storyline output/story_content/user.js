function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6MZvZckMCW9":
        Script1();
        break;
      case "5r7eXTKaXD1":
        Script2();
        break;
      case "619XN03XGgB":
        Script3();
        break;
      case "5eh3o1snSjD":
        Script4();
        break;
      case "6Dkrn4LOUZq":
        Script5();
        break;
      case "6ibTkWZpQsr":
        Script6();
        break;
      case "6LteMZu9gJd":
        Script7();
        break;
      case "6pTroo4mkrM":
        Script8();
        break;
      case "6OafmeCuP7f":
        Script9();
        break;
      case "5b9glyU2DX3":
        Script10();
        break;
      case "6qpCdHZRCw2":
        Script11();
        break;
      case "5mrPeRUDv0b":
        Script12();
        break;
      case "65RKG8sv0pj":
        Script13();
        break;
      case "5w7sqpRUreu":
        Script14();
        break;
      case "5bTgxRklr01":
        Script15();
        break;
      case "5t5SHSwVrBV":
        Script16();
        break;
      case "6XrpCWaptPg":
        Script17();
        break;
      case "5izxBGItkfK":
        Script18();
        break;
      case "5e01bDNvL0i":
        Script19();
        break;
      case "6BniuD6mq4a":
        Script20();
        break;
      case "64g7leu95Al":
        Script21();
        break;
      case "5cMGjlmZgho":
        Script22();
        break;
      case "68hp67tyeZL":
        Script23();
        break;
      case "5Z6izNZ1sBA":
        Script24();
        break;
      case "5mFUDmGX65b":
        Script25();
        break;
      case "66qmCqsfbQt":
        Script26();
        break;
      case "5Wr0jeBnBpb":
        Script27();
        break;
      case "699mTeRJZg1":
        Script28();
        break;
      case "6CyVmaX2E1K":
        Script29();
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
window.setCodigoDiapositiva(cod_actividad, cod_actividad+"D11");
window.setCodigoDiapositiva(cod_actividad, cod_actividad+"D12");
window.setCodigoDiapositiva(cod_actividad, cod_actividad+"D13");
window.setCodigoDiapositiva(cod_actividad, cod_actividad+"D14");

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
var respuesta_11 = window.getRespuesta(cod_actividad, cod_actividad+"D11");
var respuesta_12 = window.getRespuesta(cod_actividad, cod_actividad+"D12");
var respuesta_13 = window.getRespuesta(cod_actividad, cod_actividad+"D13");
var respuesta_14 = window.getRespuesta(cod_actividad, cod_actividad+"D14");

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
var solucion_11 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D11");
var solucion_12 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D12");
var solucion_13 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D13");
var solucion_14 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D14");

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
var intento_11 = window.getIntentos(cod_actividad, cod_actividad+"D11");
var intento_12 = window.getIntentos(cod_actividad, cod_actividad+"D12");
var intento_13 = window.getIntentos(cod_actividad, cod_actividad+"D13");
var intento_14 = window.getIntentos(cod_actividad, cod_actividad+"D14");

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
var logro_11 = window.getLogro(cod_actividad, cod_actividad+"D11");
var logro_12 = window.getLogro(cod_actividad, cod_actividad+"D12");
var logro_13 = window.getLogro(cod_actividad, cod_actividad+"D13");
var logro_14 = window.getLogro(cod_actividad, cod_actividad+"D14");

console.log("trae info guardada en BD");
}

function Script3()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script4()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script5()
{
  var p = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");

  var Entradadetexto = p.GetVar("Entradadetexto");
  var Entradadetexto1 = p.GetVar("Entradadetexto1");
  var Entradadetexto2 = p.GetVar("Entradadetexto2");
}

function Script6()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script7()
{
  var p = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");

  var Entradadetexto3 = p.GetVar("Entradadetexto3");
  var Entradadetexto4 = p.GetVar("Entradadetexto4");
  var Entradadetexto5 = p.GetVar("Entradadetexto5");
  
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

  var Entradadetexto6 = p.GetVar("Entradadetexto6");
  var Entradadetexto7 = p.GetVar("Entradadetexto7");
  var Entradadetexto8 = p.GetVar("Entradadetexto8");
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
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");
  var logro = p.GetVar("logro");
  var circulo1 = p.GetVar("circulo1");
  var circulo1 = p.GetVar("circulo2");
  var circulo1 = p.GetVar("circulo3");
  var circulo1 = p.GetVar("circulo4");
  var circulo1 = p.GetVar("circulo5");
  var circulo1 = p.GetVar("circulo6");
  var circulo1 = p.GetVar("circulo7");
  var respuesta =[circulo1,circulo2,circulo3,circulo4,circulo5,circulo6,circulo7]
  var respuesta_06 = p.GetVar("respuesta_06");

  if (respuesta != respuesta_06) {
    console.log("no es igual");
    window.setIntentos(cod_actividad, cod_diapositiva);
    window.setLogro(cod_actividad, cod_diapositiva, logro);
    window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
    window.getEstadoSolucionario(cod_actividad, cod_diapositiva);
    //respuesta = respuesta_06;
    //p.SetVar("respuesta_06",respuesta);
  } else {
    console.log("es igual");
    window.setLogro(cod_actividad, cod_diapositiva, logro);
    window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
    window.getEstadoSolucionario(cod_actividad, cod_diapositiva);
    //p.SetVar("respuesta",respuesta_diapo);
    //respuesta = respuesta_06;
    //p.SetVar("respuesta_06",respuesta);
  }

  console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
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
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");

  var Entradadetexto9 = p.GetVar("Entradadetexto9");
  var Entradadetexto10 = p.GetVar("Entradadetexto10");
  var Entradadetexto11 = p.GetVar("Entradadetexto11");
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

  var Entradadetexto12 = p.GetVar("Entradadetexto12");
  var Entradadetexto13 = p.GetVar("Entradadetexto13");
  var Entradadetexto14 = p.GetVar("Entradadetexto14");
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
  var logro = p.GetVar("logro");
  var respuesta = p.GetVar("respuesta");
  var respuesta_09 = p.GetVar("respuesta_09");

  if (respuesta != respuesta_09) {
    console.log("no es igual");
    window.setIntentos(cod_actividad, cod_diapositiva);
    window.setLogro(cod_actividad, cod_diapositiva, logro);
    window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
    window.getEstadoSolucionario(cod_actividad, cod_diapositiva);
    //respuesta = respuesta_09;
    //p.SetVar("respuesta_09",respuesta);
  } else {
    console.log("es igual");
    window.setLogro(cod_actividad, cod_diapositiva, logro);
    window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
    window.getEstadoSolucionario(cod_actividad, cod_diapositiva);
    //p.SetVar("respuesta",respuesta_diapo);
    //respuesta = respuesta_09;
    //p.SetVar("respuesta_09",respuesta);
  }

  console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script18()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script19()
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
    window.getEstadoSolucionario(cod_actividad, cod_diapositiva);
    //respuesta = respuesta_10;
    //p.SetVar("respuesta_10",respuesta);
  } else {
    console.log("es igual");
    window.setLogro(cod_actividad, cod_diapositiva, logro);
    window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
    window.getEstadoSolucionario(cod_actividad, cod_diapositiva);
    //p.SetVar("respuesta",respuesta_diapo);
    //respuesta = respuesta_10;
    //p.SetVar("respuesta_10",respuesta);
  }

  console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script20()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script21()
{
  var p = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");
  var logro = p.GetVar("logro");
  var respuesta = p.GetVar("respuesta");
  var respuesta_11 = p.GetVar("respuesta_11");

  if (respuesta != respuesta_11) {
    console.log("no es igual");
    window.setIntentos(cod_actividad, cod_diapositiva);
    window.setLogro(cod_actividad, cod_diapositiva, logro);
    window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
    window.getEstadoSolucionario(cod_actividad, cod_diapositiva);
    //respuesta = respuesta_11;
    //p.SetVar("respuesta_11",respuesta);
  } else {
    console.log("es igual");
    window.setLogro(cod_actividad, cod_diapositiva, logro);
    window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
    window.getEstadoSolucionario(cod_actividad, cod_diapositiva);
    //p.SetVar("respuesta",respuesta_diapo);
    //respuesta = respuesta_11;
    //p.SetVar("respuesta_11",respuesta);
  }

  console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script22()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script23()
{
  var p = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");
  var logro = p.GetVar("logro");
  var respuesta = p.GetVar("respuesta");
  var respuesta_12 = p.GetVar("respuesta_12");

  if (respuesta != respuesta_12) {
    console.log("no es igual");
    window.setIntentos(cod_actividad, cod_diapositiva);
    window.setLogro(cod_actividad, cod_diapositiva, logro);
    window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
    window.getEstadoSolucionario(cod_actividad, cod_diapositiva);
    //respuesta = respuesta_12;
    //p.SetVar("respuesta_12",respuesta);
  } else {
    console.log("es igual");
    window.setLogro(cod_actividad, cod_diapositiva, logro);
    window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
    window.getEstadoSolucionario(cod_actividad, cod_diapositiva);
    //p.SetVar("respuesta",respuesta_diapo);
    //respuesta = respuesta_12;
    //p.SetVar("respuesta_12",respuesta);
  }

  console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script24()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script25()
{
  var p = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");
  var logro = p.GetVar("logro");
  var respuesta = p.GetVar("respuesta");
  var respuesta_13 = p.GetVar("respuesta_13");

  if (respuesta != respuesta_13) {
    console.log("no es igual");
    window.setIntentos(cod_actividad, cod_diapositiva);
    window.setLogro(cod_actividad, cod_diapositiva, logro);
    window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
    window.getEstadoSolucionario(cod_actividad, cod_diapositiva);
    //respuesta = respuesta_13;
    //p.SetVar("respuesta_13",respuesta);
  } else {
    console.log("es igual");
    window.setLogro(cod_actividad, cod_diapositiva, logro);
    window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
    window.getEstadoSolucionario(cod_actividad, cod_diapositiva);
    //p.SetVar("respuesta",respuesta_diapo);
    //respuesta = respuesta_13;
    //p.SetVar("respuesta_13",respuesta);
  }

  console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script26()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script27()
{
  var p = GetPlayer();
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
  var respuesta = [arrastre1,arrastre2,arrastre3,arrastre,4,arrastre5,arrastre6,arrastre7]
  var respuesta_14 = p.GetVar("respuesta_14");

  if (respuesta != respuesta_14) {
    console.log("no es igual");
    window.setIntentos(cod_actividad, cod_diapositiva);
    window.setLogro(cod_actividad, cod_diapositiva, logro);
    window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
    window.getEstadoSolucionario(cod_actividad, cod_diapositiva);
    //respuesta = respuesta_14;
    //p.SetVar("respuesta_14",respuesta);
  } else {
    console.log("es igual");
    window.setLogro(cod_actividad, cod_diapositiva, logro);
    window.setRespuesta(cod_actividad, cod_diapositiva, respuesta);
    window.getEstadoSolucionario(cod_actividad, cod_diapositiva);
    //p.SetVar("respuesta",respuesta_diapo);
    //respuesta = respuesta_14;
    //p.SetVar("respuesta_14",respuesta);
  }

  console.log("intentos: ", window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script28()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script29()
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
var respuesta_11 = window.getRespuesta(cod_actividad, cod_actividad+"D11");
var respuesta_12 = window.getRespuesta(cod_actividad, cod_actividad+"D12");
var respuesta_13 = window.getRespuesta(cod_actividad, cod_actividad+"D13");
var respuesta_14 = window.getRespuesta(cod_actividad, cod_actividad+"D14");

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
var solucion_11 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D11");
var solucion_12 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D12");
var solucion_13 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D13");
var solucion_14 = window.getEstadoSolucionario(cod_actividad, cod_actividad+"D14");

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
var intento_11 = window.getIntentos(cod_actividad, cod_actividad+"D11");
var intento_12 = window.getIntentos(cod_actividad, cod_actividad+"D12");
var intento_13 = window.getIntentos(cod_actividad, cod_actividad+"D13");
var intento_14 = window.getIntentos(cod_actividad, cod_actividad+"D14");

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
var logro_11 = window.getLogro(cod_actividad, cod_actividad+"D11");
var logro_12 = window.getLogro(cod_actividad, cod_actividad+"D12");
var logro_13 = window.getLogro(cod_actividad, cod_actividad+"D13");
var logro_14 = window.getLogro(cod_actividad, cod_actividad+"D14");

window.getTotal(cod_actividad,14);
}

