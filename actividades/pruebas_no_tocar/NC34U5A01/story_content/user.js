function ExecuteScript(strId) {
  switch (strId) {
    case "5ntQHzjtEMz":
      Script1();
      break;
    case "5XuOqaky5hG":
      Script2();
      break;
    case "6E3JpzbMcNi":
      Script3();
      break;
    case "6lcwqbLzcLa":
      Script4();
      break;
    case "6DnuJVXkbMC":
      Script5();
      break;
    case "6SQp4lOL2qA":
      Script6();
      break;
    case "5rL3GSGVYYY":
      Script7();
      break;
    case "6A6Hmkv95C0":
      Script8();
      break;
    case "5mXvvrovcGd":
      Script9();
      break;
    case "608xyKvbOsx":
      Script10();
      break;
    case "6PgfLqLuSjf":
      Script11();
      break;
    case "6PQuSQfBq5C":
      Script12();
      break;
    case "5mlHhH2jlm0":
      Script13();
      break;
    case "63uNVUm2JRv":
      Script14();
      break;
    case "6GS4nNjS5Mt":
      Script15();
      break;
    case "6nDdOdP4Bqg":
      Script16();
      break;
    case "6iPa6DD5cq5":
      Script17();
      break;
    case "5WiNWIXQdXK":
      Script18();
      break;
    case "5ziHGPS6l3d":
      Script19();
      break;
    case "6a8otyWdXrf":
      Script20();
      break;
    case "65u3DXM91mC":
      Script21();
      break;
    case "5h7ekHs1eDL":
      Script22();
      break;
    case "5wFn7yY7dIL":
      Script23();
      break;
    case "63doxaF91NE":
      Script24();
      break;
    case "5lTlsoF08OB":
      Script25();
      break;
    case "6caCHNKEZj4":
      Script26();
      break;
  }
}

function holaMundo() {
  console.log("Hola Mundo")
}

function Script1() {
  var p = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");

  window.onload = (event) => {
    console.log('page is fully loaded');
  };

  window.setCodigoDiapositiva(cod_actividad, cod_diapositiva);



  var estadoSolucionario = p.GetVar("estadoSolucionario");
  var intentos = p.GetVar("intentos");
  var logro = p.GetVar("logro");
  var pregunta = p.GetVar("pregunta");
  var respuesta = p.GetVar("respuesta");

  p.SetVar("estadoSolucionario", "false");
  p.SetVar("intentos", "0");
  p.SetVar("logro", "0");
  p.SetVar("pregunta", "false");
  p.SetVar("respuesta", "0");

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

function Script2() {
  console.log("click");

  // setCodigoActividad("NC34U5A01")
  window.setCodigoDiapositiva(cod_actividad, cod_diapositiva);
}

function Script3() {
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

function Script4() {
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

function Script5() {
  var p = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");
  var estadoSolucionario = p.GetVar("estadoSolucionario");
  var intentos = p.GetVar("intentos");
  var logro = p.GetVar("logro");
  var pregunta = p.GetVar("pregunta");
  var respuesta = p.GetVar("respuesta");

  p.SetVar("estadoSolucionario", "false");
  p.SetVar("intentos", "0");
  p.SetVar("logro", "0");
  p.SetVar("pregunta", "false");
  p.SetVar("respuesta", "0");

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

function Script6() {
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

function Script7() {
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

function Script8() {
  var p = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");
  var estadoSolucionario = p.GetVar("estadoSolucionario");
  var intentos = p.GetVar("intentos");
  var logro = p.GetVar("logro");
  var pregunta = p.GetVar("pregunta");
  var respuesta = p.GetVar("respuesta");

  p.SetVar("estadoSolucionario", "false");
  p.SetVar("intentos", "0");
  p.SetVar("logro", "0");
  p.SetVar("pregunta", "false");
  p.SetVar("respuesta", "0");

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

function Script9() {
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

function Script10() {
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

function Script11() {
  var p = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");
  var estadoSolucionario = p.GetVar("estadoSolucionario");
  var intentos = p.GetVar("intentos");
  var logro = p.GetVar("logro");
  var pregunta = p.GetVar("pregunta");
  var respuesta = p.GetVar("respuesta");

  p.SetVar("estadoSolucionario", "false");
  p.SetVar("intentos", "0");
  p.SetVar("logro", "0");
  p.SetVar("pregunta", "false");
  p.SetVar("respuesta", "0");

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

function Script12() {
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

function Script13() {
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

function Script14() {
  var p = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");
  var estadoSolucionario = p.GetVar("estadoSolucionario");
  var intentos = p.GetVar("intentos");
  var logro = p.GetVar("logro");
  var pregunta = p.GetVar("pregunta");
  var respuesta = p.GetVar("respuesta");

  p.SetVar("estadoSolucionario", "false");
  p.SetVar("intentos", "0");
  p.SetVar("logro", "0");
  p.SetVar("pregunta", "false");
  p.SetVar("respuesta", "0");

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

function Script15() {
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

  p.GetVar("intento_05") = (localStorage.getItem("intento_05"));
  p.GetVar("preg_05") = (localStorage.getItem("preg_05"));
  p.GetVar("respuesta_05") = (localStorage.getItem("respuesta_05"));
  p.GetVar("solucion_05") = (localStorage.getItem("solucion_05"));
  p.GetVar("cod_act_05") = (localStorage.getItem("cod_act_05"));

  console.log(p.GetVar("intento_05"));
  console.log(p.GetVar("preg_05"));
  console.log(p.GetVar("respuesta_05"));
  console.log(p.GetVar("solucion_05"));
  console.log(p.GetVar("cod_act_05"));
}

function Script16() {
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

  p.GetVar("intento_05") = (localStorage.getItem("intento_05"));
  p.GetVar("preg_05") = (localStorage.getItem("preg_05"));
  p.GetVar("respuesta_05") = (localStorage.getItem("respuesta_05"));
  p.GetVar("solucion_05") = (localStorage.getItem("solucion_05"));
  p.GetVar("cod_act_05") = (localStorage.getItem("cod_act_05"));

  console.log(p.GetVar("intento_05"));
  console.log(p.GetVar("preg_05"));
  console.log(p.GetVar("respuesta_05"));
  console.log(p.GetVar("solucion_05"));
  console.log(p.GetVar("cod_act_05"));
}

function Script17() {
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

  p.GetVar("intento_06") = (localStorage.getItem("intento_06"));
  p.GetVar("preg_06") = (localStorage.getItem("preg_06"));
  p.GetVar("respuesta_06") = (localStorage.getItem("respuesta_06"));
  p.GetVar("solucion_06") = (localStorage.getItem("solucion_06"));
  p.GetVar("cod_act_06") = (localStorage.getItem("cod_act_06"));

  console.log(p.GetVar("intento_06"));
  console.log(p.GetVar("preg_06"));
  console.log(p.GetVar("respuesta_06"));
  console.log(p.GetVar("solucion_06"));
  console.log(p.GetVar("cod_act_06"));
}

function Script18() {
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

  p.GetVar("intento_06") = (localStorage.getItem("intento_06"));
  p.GetVar("preg_06") = (localStorage.getItem("preg_06"));
  p.GetVar("respuesta_06") = (localStorage.getItem("respuesta_06"));
  p.GetVar("solucion_06") = (localStorage.getItem("solucion_06"));
  p.GetVar("cod_act_06") = (localStorage.getItem("cod_act_06"));

  console.log(p.GetVar("intento_06"));
  console.log(p.GetVar("preg_06"));
  console.log(p.GetVar("respuesta_06"));
  console.log(p.GetVar("solucion_06"));
  console.log(p.GetVar("cod_act_06"));
}

function Script19() {
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

  p.GetVar("intento_07") = (localStorage.getItem("intento_07"));
  p.GetVar("preg_07") = (localStorage.getItem("preg_07"));
  p.GetVar("respuesta_07") = (localStorage.getItem("respuesta_07"));
  p.GetVar("solucion_07") = (localStorage.getItem("solucion_07"));
  p.GetVar("cod_act_07") = (localStorage.getItem("cod_act_07"));

  console.log(p.GetVar("intento_07"));
  console.log(p.GetVar("preg_07"));
  console.log(p.GetVar("respuesta_07"));
  console.log(p.GetVar("solucion_07"));
  console.log(p.GetVar("cod_act_07"));
}

function Script20() {
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

  p.GetVar("intento_07") = (localStorage.getItem("intento_07"));
  p.GetVar("preg_07") = (localStorage.getItem("preg_07"));
  p.GetVar("respuesta_07") = (localStorage.getItem("respuesta_07"));
  p.GetVar("solucion_07") = (localStorage.getItem("solucion_07"));
  p.GetVar("cod_act_07") = (localStorage.getItem("cod_act_07"));

  console.log(p.GetVar("intento_07"));
  console.log(p.GetVar("preg_07"));
  console.log(p.GetVar("respuesta_07"));
  console.log(p.GetVar("solucion_07"));
  console.log(p.GetVar("cod_act_07"));
}

function Script21() {
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

  p.GetVar("intento_08") = (localStorage.getItem("intento_08"));
  p.GetVar("preg_08") = (localStorage.getItem("preg_08"));
  p.GetVar("respuesta_08") = (localStorage.getItem("respuesta_08"));
  p.GetVar("solucion_08") = (localStorage.getItem("solucion_08"));
  p.GetVar("cod_act_08") = (localStorage.getItem("cod_act_08"));

  console.log(p.GetVar("intento_08"));
  console.log(p.GetVar("preg_08"));
  console.log(p.GetVar("respuesta_08"));
  console.log(p.GetVar("solucion_08"));
  console.log(p.GetVar("cod_act_08"));
}

function Script22() {
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

  p.GetVar("intento_08") = (localStorage.getItem("intento_08"));
  p.GetVar("preg_08") = (localStorage.getItem("preg_08"));
  p.GetVar("respuesta_08") = (localStorage.getItem("respuesta_08"));
  p.GetVar("solucion_08") = (localStorage.getItem("solucion_08"));
  p.GetVar("cod_act_08") = (localStorage.getItem("cod_act_08"));

  console.log(p.GetVar("intento_08"));
  console.log(p.GetVar("preg_08"));
  console.log(p.GetVar("respuesta_08"));
  console.log(p.GetVar("solucion_08"));
  console.log(p.GetVar("cod_act_08"));
}

function Script23() {
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

  p.GetVar("intento_09") = (localStorage.getItem("intento_09"));
  p.GetVar("preg_09") = (localStorage.getItem("preg_09"));
  p.GetVar("respuesta_09") = (localStorage.getItem("respuesta_09"));
  p.GetVar("solucion_09") = (localStorage.getItem("solucion_09"));
  p.GetVar("cod_act_09") = (localStorage.getItem("cod_act_09"));

  console.log(p.GetVar("intento_09"));
  console.log(p.GetVar("preg_09"));
  console.log(p.GetVar("respuesta_09"));
  console.log(p.GetVar("solucion_09"));
  console.log(p.GetVar("cod_act_09"));
}

function Script24() {
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

  p.GetVar("intento_09") = (localStorage.getItem("intento_09"));
  p.GetVar("preg_09") = (localStorage.getItem("preg_09"));
  p.GetVar("respuesta_09") = (localStorage.getItem("respuesta_09"));
  p.GetVar("solucion_09") = (localStorage.getItem("solucion_09"));
  p.GetVar("cod_act_09") = (localStorage.getItem("cod_act_09"));

  console.log(p.GetVar("intento_09"));
  console.log(p.GetVar("preg_09"));
  console.log(p.GetVar("respuesta_09"));
  console.log(p.GetVar("solucion_09"));
  console.log(p.GetVar("cod_act_09"));
}

function Script25() {
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

  p.GetVar("intento_10") = (localStorage.getItem("intento_10"));
  p.GetVar("preg_10") = (localStorage.getItem("preg_10"));
  p.GetVar("respuesta_10") = (localStorage.getItem("respuesta_10"));
  p.GetVar("solucion_10") = (localStorage.getItem("solucion_10"));
  p.GetVar("cod_act_10") = (localStorage.getItem("cod_act_10"));

  console.log(p.GetVar("intento_10"));
  console.log(p.GetVar("preg_10"));
  console.log(p.GetVar("respuesta_10"));
  console.log(p.GetVar("solucion_10"));
  console.log(p.GetVar("cod_act_10"));
}

function Script26() {
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

  p.GetVar("intento_10") = (localStorage.getItem("intento_10"));
  p.GetVar("preg_10") = (localStorage.getItem("preg_10"));
  p.GetVar("respuesta_10") = (localStorage.getItem("respuesta_10"));
  p.GetVar("solucion_10") = (localStorage.getItem("solucion_10"));
  p.GetVar("cod_act_10") = (localStorage.getItem("cod_act_10"));

  console.log(p.GetVar("intento_10"));
  console.log(p.GetVar("preg_10"));
  console.log(p.GetVar("respuesta_10"));
  console.log(p.GetVar("solucion_10"));
  console.log(p.GetVar("cod_act_10"));
}

