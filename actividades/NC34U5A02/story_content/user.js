function ExecuteScript(strId) {
  switch (strId) {
    case "5VDq76L5AFU":
      Script1();
      break;
    case "64hgy5O3qwY":
      Script2();
      break;
    case "6qqkryEkkel":
      Script3();
      break;
    case "65NwZQ9xUaQ":
      Script4();
      break;
    case "6IV7yzcC8X4":
      Script5();
      break;
    case "6RK4pfKCVQ3":
      Script6();
      break;
    case "6QdgAtzvNqr":
      Script7();
      break;
    case "5Y0orlwRnXT":
      Script8();
      break;
    case "68WYPfawrvh":
      Script9();
      break;
    case "6SPpm0Na8wO":
      Script10();
      break;
    case "6GB4pbpQH2a":
      Script11();
      break;
    case "6LJPpQV1SJz":
      Script12();
      break;
    case "6Xc8CgweTz1":
      Script13();
      break;
    case "5gUEFLaf8Da":
      Script14();
      break;
    case "6m2mC1phk8F":
      Script15();
      break;
    case "6JOndB5xLzI":
      Script16();
      break;
    case "5UoyJ0O76jR":
      Script17();
      break;
  }
}

function Script1() {
  var p = GetPlayer();
  player = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");

  window.setCodigoDiapositiva(cod_actividad, cod_actividad + "D01");
  window.setCodigoDiapositiva(cod_actividad, cod_actividad + "D02");
  window.setCodigoDiapositiva(cod_actividad, cod_actividad + "D03");
  window.setCodigoDiapositiva(cod_actividad, cod_actividad + "D04");
  window.setCodigoDiapositiva(cod_actividad, cod_actividad + "D05");
  window.setCodigoDiapositiva(cod_actividad, cod_actividad + "D06");
  window.setCodigoDiapositiva(cod_actividad, cod_actividad + "D07");

  window.getCodigoDiapositiva(cod_actividad, cod_diapositiva);
  window.getIntentos(cod_actividad, cod_diapositiva);

  console.log("Inicializa actividades en BD", cod_actividad + "D01");
}

function Script2() {
  var p = GetPlayer();
  player = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");
  var drag1 = p.GetVar("drag1");
  var drag2 = p.GetVar("drag2");
  var drag3 = p.GetVar("drag3");
  var drag4 = p.GetVar("drag4");

  var respuesta_01 = window.getRespuesta(cod_actividad, cod_actividad + "D01");
  var respuesta_02 = window.getRespuesta(cod_actividad, cod_actividad + "D02");
  var respuesta_03 = window.getRespuesta(cod_actividad, cod_actividad + "D03");
  var respuesta_04 = window.getRespuesta(cod_actividad, cod_actividad + "D04");
  var respuesta_05 = window.getRespuesta(cod_actividad, cod_actividad + "D05");
  var respuesta_06 = window.getRespuesta(cod_actividad, cod_actividad + "D06");
  var respuesta_07 = window.getRespuesta(cod_actividad, cod_actividad + "D07");

  console.log(respuesta_01);
  console.log("respuesta_01");
  console.log(respuesta_01[0]);
  var drag1 = respuesta_01[0];
  console.log("drag1");

  var solucion_01 = window.getEstadoSolucionario(
    cod_actividad,
    cod_actividad + "D01"
  );
  var solucion_02 = window.getEstadoSolucionario(
    cod_actividad,
    cod_actividad + "D02"
  );
  var solucion_03 = window.getEstadoSolucionario(
    cod_actividad,
    cod_actividad + "D03"
  );
  var solucion_04 = window.getEstadoSolucionario(
    cod_actividad,
    cod_actividad + "D04"
  );
  var solucion_05 = window.getEstadoSolucionario(
    cod_actividad,
    cod_actividad + "D05"
  );
  var solucion_06 = window.getEstadoSolucionario(
    cod_actividad,
    cod_actividad + "D06"
  );
  var solucion_07 = window.getEstadoSolucionario(
    cod_actividad,
    cod_actividad + "D07"
  );

  var intento_01 = window.getIntentos(cod_actividad, cod_actividad + "D01");
  var intento_02 = window.getIntentos(cod_actividad, cod_actividad + "D02");
  var intento_03 = window.getIntentos(cod_actividad, cod_actividad + "D03");
  var intento_04 = window.getIntentos(cod_actividad, cod_actividad + "D04");
  var intento_05 = window.getIntentos(cod_actividad, cod_actividad + "D05");
  var intento_06 = window.getIntentos(cod_actividad, cod_actividad + "D06");
  var intento_07 = window.getIntentos(cod_actividad, cod_actividad + "D07");

  var logro_01 = window.getLogro(cod_actividad, cod_actividad + "D01");
  var logro_02 = window.getLogro(cod_actividad, cod_actividad + "D02");
  var logro_03 = window.getLogro(cod_actividad, cod_actividad + "D03");
  var logro_04 = window.getLogro(cod_actividad, cod_actividad + "D04");
  var logro_05 = window.getLogro(cod_actividad, cod_actividad + "D05");
  var logro_06 = window.getLogro(cod_actividad, cod_actividad + "D06");
  var logro_07 = window.getLogro(cod_actividad, cod_actividad + "D07");

  console.log("trae info guardada en BD");
  console.log("respuesta_01 " + respuesta_01[0]);
}

function Script3() {
  var p = GetPlayer();
  player = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");
  var logro = p.GetVar("logro");
  var drag1 = p.GetVar("drag1");
  var drag2 = p.GetVar("drag2");
  var drag3 = p.GetVar("drag3");
  var drag4 = p.GetVar("drag4");
  var respuesta = [drag1, drag2, drag3, drag4];
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

function Script4() {
  var p = GetPlayer();
  player = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");

  window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

  console.log(
    "estado solucionario: ",
    window.getEstadoSolucionario(cod_actividad, cod_diapositiva)
  );
}

function Script5() {
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

function Script6() {
  var p = GetPlayer();
  player = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");

  window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

  console.log(
    "estado solucionario: ",
    window.getEstadoSolucionario(cod_actividad, cod_diapositiva)
  );
}

function Script7() {
  var p = GetPlayer();
  player = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");
  var logro = p.GetVar("logro");
  var drag1 = p.GetVar("drag1");
  var drag2 = p.GetVar("drag2");
  var drag3 = p.GetVar("drag3");
  var drag4 = p.GetVar("drag4");
  var respuesta = [drag1, drag2, drag3, drag4];
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

function Script8() {
  var p = GetPlayer();
  player = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");

  window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

  console.log(
    "estado solucionario: ",
    window.getEstadoSolucionario(cod_actividad, cod_diapositiva)
  );
}

function Script9() {
  var p = GetPlayer();
  player = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");
  var logro = p.GetVar("logro");
  var drag1 = p.GetVar("drag1");
  var drag2 = p.GetVar("drag2");
  var drag3 = p.GetVar("drag3");
  var drag4 = p.GetVar("drag4");
  var respuesta = [drag1, drag2, drag3, drag4];
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

function Script10() {
  var p = GetPlayer();
  player = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");

  window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

  console.log(
    "estado solucionario: ",
    window.getEstadoSolucionario(cod_actividad, cod_diapositiva)
  );
}

function Script11() {
  var p = GetPlayer();
  player = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");
  var texto_01 = p.GetVar("texto_01");
  var texto_02 = p.GetVar("texto_02");
  var texto_03 = p.GetVar("texto_03");
  var respuesta = [texto_01, texto_02, texto_03];
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

function Script12() {
  var p = GetPlayer();
  player = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");

  window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

  console.log(
    "estado solucionario: ",
    window.getEstadoSolucionario(cod_actividad, cod_diapositiva)
  );
}

function Script13() {
  var p = GetPlayer();
  player = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");
  var texto_04 = p.GetVar("texto_04");
  var texto_05 = p.GetVar("texto_05");
  var texto_06 = p.GetVar("texto_06");
  var respuesta = [texto_04, texto_05, texto_06];
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

function Script14() {
  var p = GetPlayer();
  player = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");

  window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

  console.log(
    "estado solucionario: ",
    window.getEstadoSolucionario(cod_actividad, cod_diapositiva)
  );
}

function Script15() {
  var p = GetPlayer();
  player = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");
  var logro = p.GetVar("logro");
  var respuesta = p.GetVar("respuesta");
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

function Script16() {
  var p = GetPlayer();
  player = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");

  window.setEstadoSolucionario(cod_actividad, cod_diapositiva);

  console.log(
    "estado solucionario: ",
    window.getEstadoSolucionario(cod_actividad, cod_diapositiva)
  );
}

function Script17() {
  var p = GetPlayer();
  player = GetPlayer();
  var cod_actividad = p.GetVar("cod_actividad");
  var cod_diapositiva = p.GetVar("cod_diapositiva");

  var respuesta_01 = window.getRespuesta(cod_actividad, cod_actividad + "D01");
  var respuesta_02 = window.getRespuesta(cod_actividad, cod_actividad + "D02");
  var respuesta_03 = window.getRespuesta(cod_actividad, cod_actividad + "D03");
  var respuesta_04 = window.getRespuesta(cod_actividad, cod_actividad + "D04");
  var respuesta_05 = window.getRespuesta(cod_actividad, cod_actividad + "D05");
  var respuesta_06 = window.getRespuesta(cod_actividad, cod_actividad + "D06");
  var respuesta_07 = window.getRespuesta(cod_actividad, cod_actividad + "D07");
  var respuesta_08 = window.getRespuesta(cod_actividad, cod_actividad + "D08");

  var solucion_01 = window.getEstadoSolucionario(
    cod_actividad,
    cod_actividad + "D01"
  );
  var solucion_02 = window.getEstadoSolucionario(
    cod_actividad,
    cod_actividad + "D02"
  );
  var solucion_03 = window.getEstadoSolucionario(
    cod_actividad,
    cod_actividad + "D03"
  );
  var solucion_04 = window.getEstadoSolucionario(
    cod_actividad,
    cod_actividad + "D04"
  );
  var solucion_05 = window.getEstadoSolucionario(
    cod_actividad,
    cod_actividad + "D05"
  );
  var solucion_06 = window.getEstadoSolucionario(
    cod_actividad,
    cod_actividad + "D06"
  );
  var solucion_07 = window.getEstadoSolucionario(
    cod_actividad,
    cod_actividad + "D07"
  );
  var solucion_08 = window.getEstadoSolucionario(
    cod_actividad,
    cod_actividad + "D08"
  );

  var intento_01 = window.getIntentos(cod_actividad, cod_actividad + "D01");
  var intento_02 = window.getIntentos(cod_actividad, cod_actividad + "D02");
  var intento_03 = window.getIntentos(cod_actividad, cod_actividad + "D03");
  var intento_04 = window.getIntentos(cod_actividad, cod_actividad + "D04");
  var intento_05 = window.getIntentos(cod_actividad, cod_actividad + "D05");
  var intento_06 = window.getIntentos(cod_actividad, cod_actividad + "D06");
  var intento_07 = window.getIntentos(cod_actividad, cod_actividad + "D07");
  var intento_08 = window.getIntentos(cod_actividad, cod_actividad + "D08");

  var logro_01 = window.getLogro(cod_actividad, cod_actividad + "D01");
  var logro_02 = window.getLogro(cod_actividad, cod_actividad + "D02");
  var logro_03 = window.getLogro(cod_actividad, cod_actividad + "D03");
  var logro_04 = window.getLogro(cod_actividad, cod_actividad + "D04");
  var logro_05 = window.getLogro(cod_actividad, cod_actividad + "D05");
  var logro_06 = window.getLogro(cod_actividad, cod_actividad + "D06");
  var logro_07 = window.getLogro(cod_actividad, cod_actividad + "D07");
  var logro_08 = window.getLogro(cod_actividad, cod_actividad + "D08");

  window.getTotal(cod_actividad, 4);
}
