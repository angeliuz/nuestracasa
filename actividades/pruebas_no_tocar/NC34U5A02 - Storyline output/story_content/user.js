function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Cn15GyqzI5":
        Script1();
        break;
      case "5mqYCZEbqFC":
        Script2();
        break;
      case "5ksyaVYL21z":
        Script3();
        break;
      case "6MOXWJJ2dWH":
        Script4();
        break;
      case "646rVnuEREh":
        Script5();
        break;
      case "5r6ngmaUscr":
        Script6();
        break;
      case "5ioWyydRzUK":
        Script7();
        break;
      case "6Io1un4YVQO":
        Script8();
        break;
      case "6p2D0ONC03l":
        Script9();
        break;
      case "63iACXBzTgo":
        Script10();
        break;
      case "5t1NlQIOY7T":
        Script11();
        break;
      case "61vkO9Cn6B8":
        Script12();
        break;
      case "6d8OQHLdOdL":
        Script13();
        break;
      case "5VoOphgQXqT":
        Script14();
        break;
      case "5iP0z685jPt":
        Script15();
        break;
      case "6V3vNtYYv61":
        Script16();
        break;
      case "66vzKxwPqol":
        Script17();
        break;
      case "5iYOyk8doXH":
        Script18();
        break;
      case "6ABT0D85dQ5":
        Script19();
        break;
      case "6M0sCNljSUA":
        Script20();
        break;
      case "6WhhrXmieGl":
        Script21();
        break;
      case "6DLcm7BmTab":
        Script22();
        break;
      case "6MReMWsPO0D":
        Script23();
        break;
      case "6aiLmNp9CtI":
        Script24();
        break;
      case "6n88ocsEivt":
        Script25();
        break;
      case "6g6TtNDvBxn":
        Script26();
        break;
  }
}

function Script1()
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

console.log(cod_actividad);
console.log(cod_diapositiva);
console.log(estadoSolucionario);
console.log(intentos);
console.log(logro);
console.log(pregunta);
console.log(respuesta);

console.log(p.GetVar("cod_actividad"));
console.log(p.GetVar("cod_diapositiva"));
console.log(p.GetVar("estadoSolucionario"));
console.log(p.GetVar("intentos"));
console.log(p.GetVar("logro"));
console.log(p.GetVar("pregunta"));
console.log(p.GetVar("respuesta"));
}

function Script2()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script3()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setIntentos(cod_actividad, cod_diapositiva)

console.log("intentos: ",window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script4()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setIntentos(cod_actividad, cod_diapositiva)

console.log("intentos: ",window.getIntentos(cod_actividad, cod_diapositiva));
}

function Script5()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var estadoSolucionario = p.GetVar("estadoSolucionario");
var intentos = p.GetVar("intentos");
var logro = p.GetVar("logro");
var pregunta = p.GetVar("pregunta");
var respuesta = p.GetVar("respuesta");

p.SetVar("estadoSolucionario","false");
p.SetVar("intentos","0");
p.SetVar("logro","0");
p.SetVar("pregunta","false");
p.SetVar("respuesta","0");

console.log(cod_actividad);
console.log(cod_diapositiva);
console.log(estadoSolucionario);
console.log(intentos);
console.log(logro);
console.log(pregunta);
console.log(respuesta);

console.log(p.GetVar("cod_actividad"));
console.log(p.GetVar("cod_diapositiva"));
console.log(p.GetVar("estadoSolucionario"));
console.log(p.GetVar("intentos"));
console.log(p.GetVar("logro"));
console.log(p.GetVar("pregunta"));
console.log(p.GetVar("respuesta"));
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

console.log(cod_actividad);
console.log(cod_diapositiva);
console.log(estadoSolucionario);
console.log(intentos);
console.log(logro);
console.log(pregunta);
console.log(respuesta);
}

function Script7()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var estadoSolucionario = p.GetVar("estadoSolucionario");
var intentos = p.GetVar("intentos");
var logro = p.GetVar("logro");
var pregunta = p.GetVar("pregunta");
var respuesta = p.GetVar("respuesta");

console.log(cod_actividad);
console.log(cod_diapositiva);
console.log(estadoSolucionario);
console.log(intentos);
console.log(logro);
console.log(pregunta);
console.log(respuesta);
}

function Script8()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var estadoSolucionario = p.GetVar("estadoSolucionario");
var intentos = p.GetVar("intentos");
var logro = p.GetVar("logro");
var pregunta = p.GetVar("pregunta");
var respuesta = p.GetVar("respuesta");

p.SetVar("estadoSolucionario","false");
p.SetVar("intentos","0");
p.SetVar("logro","0");
p.SetVar("pregunta","false");
p.SetVar("respuesta","0");

console.log(cod_actividad);
console.log(cod_diapositiva);
console.log(estadoSolucionario);
console.log(intentos);
console.log(logro);
console.log(pregunta);
console.log(respuesta);

console.log(p.GetVar("cod_actividad"));
console.log(p.GetVar("cod_diapositiva"));
console.log(p.GetVar("estadoSolucionario"));
console.log(p.GetVar("intentos"));
console.log(p.GetVar("logro"));
console.log(p.GetVar("pregunta"));
console.log(p.GetVar("respuesta"));
}

function Script9()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var estadoSolucionario = p.GetVar("estadoSolucionario");
var intentos = p.GetVar("intentos");
var logro = p.GetVar("logro");
var pregunta = p.GetVar("pregunta");
var respuesta = p.GetVar("respuesta");

console.log(cod_actividad);
console.log(cod_diapositiva);
console.log(estadoSolucionario);
console.log(intentos);
console.log(logro);
console.log(pregunta);
console.log(respuesta);
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

console.log(cod_actividad);
console.log(cod_diapositiva);
console.log(estadoSolucionario);
console.log(intentos);
console.log(logro);
console.log(pregunta);
console.log(respuesta);
}

function Script11()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var estadoSolucionario = p.GetVar("estadoSolucionario");
var intentos = p.GetVar("intentos");
var logro = p.GetVar("logro");
var pregunta = p.GetVar("pregunta");
var respuesta = p.GetVar("respuesta");

p.SetVar("estadoSolucionario","false");
p.SetVar("intentos","0");
p.SetVar("logro","0");
p.SetVar("pregunta","false");
p.SetVar("respuesta","0");

console.log(cod_actividad);
console.log(cod_diapositiva);
console.log(estadoSolucionario);
console.log(intentos);
console.log(logro);
console.log(pregunta);
console.log(respuesta);

console.log(p.GetVar("cod_actividad"));
console.log(p.GetVar("cod_diapositiva"));
console.log(p.GetVar("estadoSolucionario"));
console.log(p.GetVar("intentos"));
console.log(p.GetVar("logro"));
console.log(p.GetVar("pregunta"));
console.log(p.GetVar("respuesta"));
}

function Script12()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var estadoSolucionario = p.GetVar("estadoSolucionario");
var intentos = p.GetVar("intentos");
var logro = p.GetVar("logro");
var pregunta = p.GetVar("pregunta");
var respuesta = p.GetVar("respuesta");

console.log(cod_actividad);
console.log(cod_diapositiva);
console.log(estadoSolucionario);
console.log(intentos);
console.log(logro);
console.log(pregunta);
console.log(respuesta);
}

function Script13()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");
var estadoSolucionario = p.GetVar("estadoSolucionario");
var intentos = p.GetVar("intentos");
var logro = p.GetVar("logro");
var pregunta = p.GetVar("pregunta");
var respuesta = p.GetVar("respuesta");

console.log(cod_actividad);
console.log(cod_diapositiva);
console.log(estadoSolucionario);
console.log(intentos);
console.log(logro);
console.log(pregunta);
console.log(respuesta);
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

p.SetVar("estadoSolucionario","false");
p.SetVar("intentos","0");
p.SetVar("logro","0");
p.SetVar("pregunta","false");
p.SetVar("respuesta","0");

console.log(cod_actividad);
console.log(cod_diapositiva);
console.log(estadoSolucionario);
console.log(intentos);
console.log(logro);
console.log(pregunta);
console.log(respuesta);

console.log(p.GetVar("cod_actividad"));
console.log(p.GetVar("cod_diapositiva"));
console.log(p.GetVar("estadoSolucionario"));
console.log(p.GetVar("intentos"));
console.log(p.GetVar("logro"));
console.log(p.GetVar("pregunta"));
console.log(p.GetVar("respuesta"));
}

function Script15()
{
  var p = GetPlayer();
var a = p.GetVar("intento_05");
var b = p.GetVar("preg_05");
var c = p.GetVar("respuesta_05");
var d = p.GetVar("solucion_05");
var e = p.GetVar("cod_act_05");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log(localStorage.getItem("intento_05"));
console.log(localStorage.getItem("preg_05"));
console.log(localStorage.getItem("respuesta_05"));
console.log(localStorage.getItem("solucion_05"));
console.log(localStorage.getItem("cod_act_05"));

p.GetVar("intento_05")=(localStorage.getItem("intento_05"));
p.GetVar("preg_05")=(localStorage.getItem("preg_05"));
p.GetVar("respuesta_05")=(localStorage.getItem("respuesta_05"));
p.GetVar("solucion_05")=(localStorage.getItem("solucion_05"));
p.GetVar("cod_act_05")=(localStorage.getItem("cod_act_05"));

console.log(p.GetVar("intento_05"));
console.log(p.GetVar("preg_05"));
console.log(p.GetVar("respuesta_05"));
console.log(p.GetVar("solucion_05"));
console.log(p.GetVar("cod_act_05"));
}

function Script16()
{
  var p = GetPlayer();
var a = p.GetVar("intento_05");
var b = p.GetVar("preg_05");
var c = p.GetVar("respuesta_05");
var d = p.GetVar("solucion_05");
var e = p.GetVar("cod_act_05");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log(localStorage.getItem("intento_05"));
console.log(localStorage.getItem("preg_05"));
console.log(localStorage.getItem("respuesta_05"));
console.log(localStorage.getItem("solucion_05"));
console.log(localStorage.getItem("cod_act_05"));

p.GetVar("intento_05")=(localStorage.getItem("intento_05"));
p.GetVar("preg_05")=(localStorage.getItem("preg_05"));
p.GetVar("respuesta_05")=(localStorage.getItem("respuesta_05"));
p.GetVar("solucion_05")=(localStorage.getItem("solucion_05"));
p.GetVar("cod_act_05")=(localStorage.getItem("cod_act_05"));

console.log(p.GetVar("intento_05"));
console.log(p.GetVar("preg_05"));
console.log(p.GetVar("respuesta_05"));
console.log(p.GetVar("solucion_05"));
console.log(p.GetVar("cod_act_05"));
}

function Script17()
{
  var p = GetPlayer();
var a = p.GetVar("intento_06");
var b = p.GetVar("preg_06");
var c = p.GetVar("respuesta_06");
var d = p.GetVar("solucion_06");
var e = p.GetVar("cod_act_06");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log(localStorage.getItem("intento_06"));
console.log(localStorage.getItem("preg_06"));
console.log(localStorage.getItem("respuesta_06"));
console.log(localStorage.getItem("solucion_06"));
console.log(localStorage.getItem("cod_act_06"));

p.GetVar("intento_06")=(localStorage.getItem("intento_06"));
p.GetVar("preg_06")=(localStorage.getItem("preg_06"));
p.GetVar("respuesta_06")=(localStorage.getItem("respuesta_06"));
p.GetVar("solucion_06")=(localStorage.getItem("solucion_06"));
p.GetVar("cod_act_06")=(localStorage.getItem("cod_act_06"));

console.log(p.GetVar("intento_06"));
console.log(p.GetVar("preg_06"));
console.log(p.GetVar("respuesta_06"));
console.log(p.GetVar("solucion_06"));
console.log(p.GetVar("cod_act_06"));
}

function Script18()
{
  var p = GetPlayer();
var a = p.GetVar("intento_06");
var b = p.GetVar("preg_06");
var c = p.GetVar("respuesta_06");
var d = p.GetVar("solucion_06");
var e = p.GetVar("cod_act_06");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log(localStorage.getItem("intento_06"));
console.log(localStorage.getItem("preg_06"));
console.log(localStorage.getItem("respuesta_06"));
console.log(localStorage.getItem("solucion_06"));
console.log(localStorage.getItem("cod_act_06"));

p.GetVar("intento_06")=(localStorage.getItem("intento_06"));
p.GetVar("preg_06")=(localStorage.getItem("preg_06"));
p.GetVar("respuesta_06")=(localStorage.getItem("respuesta_06"));
p.GetVar("solucion_06")=(localStorage.getItem("solucion_06"));
p.GetVar("cod_act_06")=(localStorage.getItem("cod_act_06"));

console.log(p.GetVar("intento_06"));
console.log(p.GetVar("preg_06"));
console.log(p.GetVar("respuesta_06"));
console.log(p.GetVar("solucion_06"));
console.log(p.GetVar("cod_act_06"));
}

function Script19()
{
  var p = GetPlayer();
var a = p.GetVar("intento_07");
var b = p.GetVar("preg_07");
var c = p.GetVar("respuesta_07");
var d = p.GetVar("solucion_07");
var e = p.GetVar("cod_act_07");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log(localStorage.getItem("intento_07"));
console.log(localStorage.getItem("preg_07"));
console.log(localStorage.getItem("respuesta_07"));
console.log(localStorage.getItem("solucion_07"));
console.log(localStorage.getItem("cod_act_07"));

p.GetVar("intento_07")=(localStorage.getItem("intento_07"));
p.GetVar("preg_07")=(localStorage.getItem("preg_07"));
p.GetVar("respuesta_07")=(localStorage.getItem("respuesta_07"));
p.GetVar("solucion_07")=(localStorage.getItem("solucion_07"));
p.GetVar("cod_act_07")=(localStorage.getItem("cod_act_07"));

console.log(p.GetVar("intento_07"));
console.log(p.GetVar("preg_07"));
console.log(p.GetVar("respuesta_07"));
console.log(p.GetVar("solucion_07"));
console.log(p.GetVar("cod_act_07"));
}

function Script20()
{
  var p = GetPlayer();
var a = p.GetVar("intento_07");
var b = p.GetVar("preg_07");
var c = p.GetVar("respuesta_07");
var d = p.GetVar("solucion_07");
var e = p.GetVar("cod_act_07");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log(localStorage.getItem("intento_07"));
console.log(localStorage.getItem("preg_07"));
console.log(localStorage.getItem("respuesta_07"));
console.log(localStorage.getItem("solucion_07"));
console.log(localStorage.getItem("cod_act_07"));

p.GetVar("intento_07")=(localStorage.getItem("intento_07"));
p.GetVar("preg_07")=(localStorage.getItem("preg_07"));
p.GetVar("respuesta_07")=(localStorage.getItem("respuesta_07"));
p.GetVar("solucion_07")=(localStorage.getItem("solucion_07"));
p.GetVar("cod_act_07")=(localStorage.getItem("cod_act_07"));

console.log(p.GetVar("intento_07"));
console.log(p.GetVar("preg_07"));
console.log(p.GetVar("respuesta_07"));
console.log(p.GetVar("solucion_07"));
console.log(p.GetVar("cod_act_07"));
}

function Script21()
{
  var p = GetPlayer();
var a = p.GetVar("intento_08");
var b = p.GetVar("preg_08");
var c = p.GetVar("respuesta_08");
var d = p.GetVar("solucion_08");
var e = p.GetVar("cod_act_08");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log(localStorage.getItem("intento_08"));
console.log(localStorage.getItem("preg_08"));
console.log(localStorage.getItem("respuesta_08"));
console.log(localStorage.getItem("solucion_08"));
console.log(localStorage.getItem("cod_act_08"));

p.GetVar("intento_08")=(localStorage.getItem("intento_08"));
p.GetVar("preg_08")=(localStorage.getItem("preg_08"));
p.GetVar("respuesta_08")=(localStorage.getItem("respuesta_08"));
p.GetVar("solucion_08")=(localStorage.getItem("solucion_08"));
p.GetVar("cod_act_08")=(localStorage.getItem("cod_act_08"));

console.log(p.GetVar("intento_08"));
console.log(p.GetVar("preg_08"));
console.log(p.GetVar("respuesta_08"));
console.log(p.GetVar("solucion_08"));
console.log(p.GetVar("cod_act_08"));
}

function Script22()
{
  var p = GetPlayer();
var a = p.GetVar("intento_08");
var b = p.GetVar("preg_08");
var c = p.GetVar("respuesta_08");
var d = p.GetVar("solucion_08");
var e = p.GetVar("cod_act_08");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log(localStorage.getItem("intento_08"));
console.log(localStorage.getItem("preg_08"));
console.log(localStorage.getItem("respuesta_08"));
console.log(localStorage.getItem("solucion_08"));
console.log(localStorage.getItem("cod_act_08"));

p.GetVar("intento_08")=(localStorage.getItem("intento_08"));
p.GetVar("preg_08")=(localStorage.getItem("preg_08"));
p.GetVar("respuesta_08")=(localStorage.getItem("respuesta_08"));
p.GetVar("solucion_08")=(localStorage.getItem("solucion_08"));
p.GetVar("cod_act_08")=(localStorage.getItem("cod_act_08"));

console.log(p.GetVar("intento_08"));
console.log(p.GetVar("preg_08"));
console.log(p.GetVar("respuesta_08"));
console.log(p.GetVar("solucion_08"));
console.log(p.GetVar("cod_act_08"));
}

function Script23()
{
  var p = GetPlayer();
var a = p.GetVar("intento_09");
var b = p.GetVar("preg_09");
var c = p.GetVar("respuesta_09");
var d = p.GetVar("solucion_09");
var e = p.GetVar("cod_act_09");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log(localStorage.getItem("intento_09"));
console.log(localStorage.getItem("preg_09"));
console.log(localStorage.getItem("respuesta_09"));
console.log(localStorage.getItem("solucion_09"));
console.log(localStorage.getItem("cod_act_09"));

p.GetVar("intento_09")=(localStorage.getItem("intento_09"));
p.GetVar("preg_09")=(localStorage.getItem("preg_09"));
p.GetVar("respuesta_09")=(localStorage.getItem("respuesta_09"));
p.GetVar("solucion_09")=(localStorage.getItem("solucion_09"));
p.GetVar("cod_act_09")=(localStorage.getItem("cod_act_09"));

console.log(p.GetVar("intento_09"));
console.log(p.GetVar("preg_09"));
console.log(p.GetVar("respuesta_09"));
console.log(p.GetVar("solucion_09"));
console.log(p.GetVar("cod_act_09"));
}

function Script24()
{
  var p = GetPlayer();
var a = p.GetVar("intento_09");
var b = p.GetVar("preg_09");
var c = p.GetVar("respuesta_09");
var d = p.GetVar("solucion_09");
var e = p.GetVar("cod_act_09");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log(localStorage.getItem("intento_09"));
console.log(localStorage.getItem("preg_09"));
console.log(localStorage.getItem("respuesta_09"));
console.log(localStorage.getItem("solucion_09"));
console.log(localStorage.getItem("cod_act_09"));

p.GetVar("intento_09")=(localStorage.getItem("intento_09"));
p.GetVar("preg_09")=(localStorage.getItem("preg_09"));
p.GetVar("respuesta_09")=(localStorage.getItem("respuesta_09"));
p.GetVar("solucion_09")=(localStorage.getItem("solucion_09"));
p.GetVar("cod_act_09")=(localStorage.getItem("cod_act_09"));

console.log(p.GetVar("intento_09"));
console.log(p.GetVar("preg_09"));
console.log(p.GetVar("respuesta_09"));
console.log(p.GetVar("solucion_09"));
console.log(p.GetVar("cod_act_09"));
}

function Script25()
{
  var p = GetPlayer();
var a = p.GetVar("intento_10");
var b = p.GetVar("preg_10");
var c = p.GetVar("respuesta_10");
var d = p.GetVar("solucion_10");
var e = p.GetVar("cod_act_10");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log(localStorage.getItem("intento_10"));
console.log(localStorage.getItem("preg_10"));
console.log(localStorage.getItem("respuesta_10"));
console.log(localStorage.getItem("solucion_10"));
console.log(localStorage.getItem("cod_act_10"));

p.GetVar("intento_10")=(localStorage.getItem("intento_10"));
p.GetVar("preg_10")=(localStorage.getItem("preg_10"));
p.GetVar("respuesta_10")=(localStorage.getItem("respuesta_10"));
p.GetVar("solucion_10")=(localStorage.getItem("solucion_10"));
p.GetVar("cod_act_10")=(localStorage.getItem("cod_act_10"));

console.log(p.GetVar("intento_10"));
console.log(p.GetVar("preg_10"));
console.log(p.GetVar("respuesta_10"));
console.log(p.GetVar("solucion_10"));
console.log(p.GetVar("cod_act_10"));
}

function Script26()
{
  var p = GetPlayer();
var a = p.GetVar("intento_10");
var b = p.GetVar("preg_10");
var c = p.GetVar("respuesta_10");
var d = p.GetVar("solucion_10");
var e = p.GetVar("cod_act_10");

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log(localStorage.getItem("intento_10"));
console.log(localStorage.getItem("preg_10"));
console.log(localStorage.getItem("respuesta_10"));
console.log(localStorage.getItem("solucion_10"));
console.log(localStorage.getItem("cod_act_10"));

p.GetVar("intento_10")=(localStorage.getItem("intento_10"));
p.GetVar("preg_10")=(localStorage.getItem("preg_10"));
p.GetVar("respuesta_10")=(localStorage.getItem("respuesta_10"));
p.GetVar("solucion_10")=(localStorage.getItem("solucion_10"));
p.GetVar("cod_act_10")=(localStorage.getItem("cod_act_10"));

console.log(p.GetVar("intento_10"));
console.log(p.GetVar("preg_10"));
console.log(p.GetVar("respuesta_10"));
console.log(p.GetVar("solucion_10"));
console.log(p.GetVar("cod_act_10"));
}

