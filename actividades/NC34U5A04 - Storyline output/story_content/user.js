function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6fslDeNGMty":
        Script1();
        break;
      case "5ue5Cib0opS":
        Script2();
        break;
      case "5vmgJLc3PlG":
        Script3();
        break;
      case "6e3whluiGdZ":
        Script4();
        break;
      case "5gHpTJTIYc2":
        Script5();
        break;
      case "6bxADwKnQNy":
        Script6();
        break;
      case "6S2xiiDS7lg":
        Script7();
        break;
      case "6pYmJ4Rpxg0":
        Script8();
        break;
      case "6hrO746Qsu3":
        Script9();
        break;
      case "6dv0cKjlhEE":
        Script10();
        break;
      case "5ZJyOPQ09pa":
        Script11();
        break;
      case "69MDTTHb08h":
        Script12();
        break;
      case "5sNElNf9ugD":
        Script13();
        break;
      case "68QRnl9HU2Y":
        Script14();
        break;
      case "6JZycOsstLS":
        Script15();
        break;
      case "6HqFhERkqvU":
        Script16();
        break;
      case "65G0js7Rnmw":
        Script17();
        break;
      case "5fB6PlhqoAv":
        Script18();
        break;
      case "5wHtJiIQrU9":
        Script19();
        break;
      case "6dRS2St8b57":
        Script20();
        break;
      case "6crUNqCcHdp":
        Script21();
        break;
      case "6Qjk9mJRWT6":
        Script22();
        break;
      case "6Do2bKkLueH":
        Script23();
        break;
      case "5z4OFABdOqT":
        Script24();
        break;
      case "66yzpJzjWsj":
        Script25();
        break;
      case "6OFMWSnVIWc":
        Script26();
        break;
      case "6baDLLvJ6la":
        Script27();
        break;
      case "5nm1aGWmpUH":
        Script28();
        break;
      case "6SYyISQAi7e":
        Script29();
        break;
      case "5w7Owcbdx5N":
        Script30();
        break;
      case "5llHcH0xjxN":
        Script31();
        break;
      case "5V3SUBAe9CZ":
        Script32();
        break;
      case "5b1GPDqVX91":
        Script33();
        break;
      case "690qUYMXBSa":
        Script34();
        break;
      case "6by8f59Q18L":
        Script35();
        break;
      case "6HP1MgconZR":
        Script36();
        break;
      case "5r5f4D1RaTZ":
        Script37();
        break;
      case "69VVAlmlFMu":
        Script38();
        break;
      case "68HrocGNWt7":
        Script39();
        break;
      case "5rh1GTGBoBd":
        Script40();
        break;
      case "6Qyui5ezenr":
        Script41();
        break;
      case "5mwJy74ry0Q":
        Script42();
        break;
      case "69b0ANsgU3t":
        Script43();
        break;
  }
}

function Script1()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setCodigoDiapositiva(cod_actividad, cod_diapositiva);
}

function Script2()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var intento_01 = p.GetVar("intento_01");

//var intento_01p = window.getIntentos(cod_actividad, "NC34U5A01D01");

//console.log("intentos: ",window.getIntentos(cod_actividad, "NC34U5A01D01"));
window.getIntentos(cod_actividad, "NC34U5A01D01")
p.SetVar("intento_01",Number(localStorage.getItem(cod_diapositiva+"intento_01")));
//p.SetVar("intento_01",window.getIntentos(cod_actividad, "NC34U5A01D01").toString());
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
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");

window.setIntentos(cod_actividad, cod_diapositiva)
window.setLogro(cod_actividad, cod_diapositiva, logro)
window.setRespuesta(cod_actividad, cod_diapositiva, respuesta)

console.log("intentos: ",window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script5()
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

function Script6()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var estadoSolucionario = p.GetVar("estadoSolucionario");
var intentos = p.GetVar("intentos");
var logro = p.GetVar("logro");
var pregunta = p.GetVar("pregunta");
var respuesta = p.GetVar("respuesta");

window.setCodigoDiapositiva(cod_actividad, cod_diapositiva);

p.SetVar("estadoSolucionario","false");
p.SetVar("intentos","0");
p.SetVar("logro","0");
p.SetVar("pregunta","false");
p.SetVar("respuesta","0");
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
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");

window.setIntentos(cod_actividad, cod_diapositiva)
window.setLogro(cod_actividad, cod_diapositiva, logro)
window.setRespuesta(cod_actividad, cod_diapositiva, respuesta)

console.log("intentos: ",window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script9()
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

function Script10()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var estadoSolucionario = p.GetVar("estadoSolucionario");
var intentos = p.GetVar("intentos");
var logro = p.GetVar("logro");
var pregunta = p.GetVar("pregunta");
var respuesta = p.GetVar("respuesta");

window.setCodigoDiapositiva(cod_actividad, cod_diapositiva);

p.SetVar("estadoSolucionario","false");
p.SetVar("intentos","0");
p.SetVar("logro","0");
p.SetVar("pregunta","false");
p.SetVar("respuesta","0");
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

window.setIntentos(cod_actividad, cod_diapositiva)
window.setLogro(cod_actividad, cod_diapositiva, logro)
window.setRespuesta(cod_actividad, cod_diapositiva, respuesta)

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
var estadoSolucionario = p.GetVar("estadoSolucionario");
var intentos = p.GetVar("intentos");
var logro = p.GetVar("logro");
var pregunta = p.GetVar("pregunta");
var respuesta = p.GetVar("respuesta");

window.setCodigoDiapositiva(cod_actividad, cod_diapositiva);

p.SetVar("estadoSolucionario","false");
p.SetVar("intentos","0");
p.SetVar("logro","0");
p.SetVar("pregunta","false");
p.SetVar("respuesta","0");
}

function Script15()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
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
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");

window.setIntentos(cod_actividad, cod_diapositiva)
window.setLogro(cod_actividad, cod_diapositiva, logro)
window.setRespuesta(cod_actividad, cod_diapositiva, respuesta)

console.log("intentos: ",window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script18()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var estadoSolucionario = p.GetVar("estadoSolucionario");
var intentos = p.GetVar("intentos");
var logro = p.GetVar("logro");
var pregunta = p.GetVar("pregunta");
var respuesta = p.GetVar("respuesta");

window.setCodigoDiapositiva(cod_actividad, cod_diapositiva);

p.SetVar("estadoSolucionario","false");
p.SetVar("intentos","0");
p.SetVar("logro","0");
p.SetVar("pregunta","false");
p.SetVar("respuesta","0");
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
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");

window.setIntentos(cod_actividad, cod_diapositiva)
window.setLogro(cod_actividad, cod_diapositiva, logro)
window.setRespuesta(cod_actividad, cod_diapositiva, respuesta)

console.log("intentos: ",window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script21()
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

function Script22()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var estadoSolucionario = p.GetVar("estadoSolucionario");
var intentos = p.GetVar("intentos");
var logro = p.GetVar("logro");
var pregunta = p.GetVar("pregunta");
var respuesta = p.GetVar("respuesta");

window.setCodigoDiapositiva(cod_actividad, cod_diapositiva);

p.SetVar("estadoSolucionario","false");
p.SetVar("intentos","0");
p.SetVar("logro","0");
p.SetVar("pregunta","false");
p.SetVar("respuesta","0");
}

function Script23()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script24()
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

function Script25()
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

function Script26()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var estadoSolucionario = p.GetVar("estadoSolucionario");
var intentos = p.GetVar("intentos");
var logro = p.GetVar("logro");
var pregunta = p.GetVar("pregunta");
var respuesta = p.GetVar("respuesta");

window.setCodigoDiapositiva(cod_actividad, cod_diapositiva);

p.SetVar("estadoSolucionario","false");
p.SetVar("intentos","0");
p.SetVar("logro","0");
p.SetVar("pregunta","false");
p.SetVar("respuesta","0");
}

function Script27()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script28()
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

function Script29()
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

function Script30()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var estadoSolucionario = p.GetVar("estadoSolucionario");
var intentos = p.GetVar("intentos");
var logro = p.GetVar("logro");
var pregunta = p.GetVar("pregunta");
var respuesta = p.GetVar("respuesta");

window.setCodigoDiapositiva(cod_actividad, cod_diapositiva);

p.SetVar("estadoSolucionario","false");
p.SetVar("intentos","0");
p.SetVar("logro","0");
p.SetVar("pregunta","false");
p.SetVar("respuesta","0");
}

function Script31()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script32()
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

function Script33()
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

function Script34()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var estadoSolucionario = p.GetVar("estadoSolucionario");
var intentos = p.GetVar("intentos");
var logro = p.GetVar("logro");
var pregunta = p.GetVar("pregunta");
var respuesta = p.GetVar("respuesta");

window.setCodigoDiapositiva(cod_actividad, cod_diapositiva);

p.SetVar("estadoSolucionario","false");
p.SetVar("intentos","0");
p.SetVar("logro","0");
p.SetVar("pregunta","false");
p.SetVar("respuesta","0");
}

function Script35()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script36()
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

function Script37()
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

function Script38()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var estadoSolucionario = p.GetVar("estadoSolucionario");
var intentos = p.GetVar("intentos");
var logro = p.GetVar("logro");
var pregunta = p.GetVar("pregunta");
var respuesta = p.GetVar("respuesta");

window.setCodigoDiapositiva(cod_actividad, cod_diapositiva);

p.SetVar("estadoSolucionario","false");
p.SetVar("intentos","0");
p.SetVar("logro","0");
p.SetVar("pregunta","false");
p.SetVar("respuesta","0");
}

function Script39()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script40()
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

function Script41()
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

function Script42()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

//var intento_01 = window.getIntentos(NC34U5A01, NC34U5A01D01);
var intento_02 = window.getIntentos(NC34U5A01, NC34U5A01D02);
var intento_03 = window.getIntentos(NC34U5A01, NC34U5A01D03);
var intento_04 = window.getIntentos(NC34U5A01, NC34U5A01D04);
var intento_05 = window.getIntentos(NC34U5A01, NC34U5A01D05);
var intento_06 = window.getIntentos(NC34U5A01, NC34U5A01D06);
var intento_07 = window.getIntentos(NC34U5A01, NC34U5A01D07);
var intento_08 = window.getIntentos(NC34U5A01, NC34U5A01D08);
var intento_09 = window.getIntentos(NC34U5A01, NC34U5A01D09);
var intento_10 = window.getIntentos(NC34U5A01, NC34U5A01D10);
}

function Script43()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var intento_01 = p.GetVar("intento_01");

//var intento_01p = window.getIntentos(cod_actividad, "NC34U5A01D01");

//console.log("intentos: ",window.getIntentos(cod_actividad, "NC34U5A01D01"));

p.SetVar("intento_01",Number(localStorage.getItem(intento_01)));
//await p.SetVar("intento_01",window.getIntentos(cod_actividad, "NC34U5A01D01"));
}

