function ExecuteScript(strId)
{
  switch (strId)
  {
      case "63wZ87smzBZ":
        Script1();
        break;
      case "68KXscsO7rp":
        Script2();
        break;
      case "5ZZYSdocbLc":
        Script3();
        break;
      case "6meJQj8nw2w":
        Script4();
        break;
      case "6qMVKhEmCAB":
        Script5();
        break;
      case "5u1aKL5rCrj":
        Script6();
        break;
      case "6ZjKWcuDbM2":
        Script7();
        break;
      case "6pzx2ZQN4FT":
        Script8();
        break;
      case "5g69bw61cc3":
        Script9();
        break;
      case "5fNijRL0Vx9":
        Script10();
        break;
      case "6F9bTWChivE":
        Script11();
        break;
      case "6lbbz8NFviQ":
        Script12();
        break;
      case "5p6aYMmwR7r":
        Script13();
        break;
      case "5bcIunhkwGa":
        Script14();
        break;
      case "6jToITpqVnk":
        Script15();
        break;
      case "5a2lFf0ACmX":
        Script16();
        break;
      case "5y8ilKUqRzd":
        Script17();
        break;
      case "6hCoqJOQqDZ":
        Script18();
        break;
      case "6r3m8SgjzRm":
        Script19();
        break;
      case "5yjScKSPUbo":
        Script20();
        break;
      case "6m0EoNLfk0A":
        Script21();
        break;
      case "5rr1KNrgnxx":
        Script22();
        break;
      case "5yVIR8S8NWb":
        Script23();
        break;
      case "6CSQpHIap9h":
        Script24();
        break;
      case "5jdUBr0HF4m":
        Script25();
        break;
      case "6rhkKVXNBCf":
        Script26();
        break;
      case "5wn8giPOgbe":
        Script27();
        break;
      case "6eIoAQZ0izf":
        Script28();
        break;
      case "6gKZNE7e1G8":
        Script29();
        break;
      case "5tCOgo6CzS7":
        Script30();
        break;
      case "63vrr8qomkJ":
        Script31();
        break;
      case "68wkAeXwwd2":
        Script32();
        break;
      case "66HqGl15uj3":
        Script33();
        break;
      case "6qgCuiAPjFL":
        Script34();
        break;
      case "6aSRf0qobpk":
        Script35();
        break;
      case "6lPenoVIdYU":
        Script36();
        break;
      case "6caTFiK9aFd":
        Script37();
        break;
      case "67jax7MJUZf":
        Script38();
        break;
      case "60a0TQ2aRUZ":
        Script39();
        break;
      case "5Y50ciL5ip7":
        Script40();
        break;
      case "69Vx8JjjVCf":
        Script41();
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

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script3()
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
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");

window.setIntentos(cod_actividad, cod_diapositiva)
window.setLogro(cod_actividad, cod_diapositiva, logro)
window.setRespuesta(cod_actividad, cod_diapositiva, respuesta)

console.log("intentos: ",window.getIntentos(cod_actividad, cod_diapositiva));
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
var respuesta = p.GetVar("respuesta");

window.setIntentos(cod_actividad, cod_diapositiva)
window.setLogro(cod_actividad, cod_diapositiva, logro)
window.setRespuesta(cod_actividad, cod_diapositiva, respuesta)

console.log("intentos: ",window.getIntentos(cod_actividad, cod_diapositiva));
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
var logro = p.GetVar("logro");
var respuesta = p.GetVar("respuesta");

window.setIntentos(cod_actividad, cod_diapositiva)
window.setLogro(cod_actividad, cod_diapositiva, logro)
window.setRespuesta(cod_actividad, cod_diapositiva, respuesta)

console.log("intentos: ",window.getIntentos(cod_actividad, cod_diapositiva));
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

window.setIntentos(cod_actividad, cod_diapositiva)
window.setLogro(cod_actividad, cod_diapositiva, logro)
window.setRespuesta(cod_actividad, cod_diapositiva, respuesta)

console.log("intentos: ",window.getIntentos(cod_actividad, cod_diapositiva));
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

window.setIntentos(cod_actividad, cod_diapositiva)
window.setLogro(cod_actividad, cod_diapositiva, logro)
window.setRespuesta(cod_actividad, cod_diapositiva, respuesta)

console.log("intentos: ",window.getIntentos(cod_actividad, cod_diapositiva));
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
var respuesta = p.GetVar("respuesta");

window.setIntentos(cod_actividad, cod_diapositiva)
window.setLogro(cod_actividad, cod_diapositiva, logro)
window.setRespuesta(cod_actividad, cod_diapositiva, respuesta)

console.log("intentos: ",window.getIntentos(cod_actividad, cod_diapositiva));
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

function Script30()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script31()
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

function Script34()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script35()
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

function Script38()
{
  var p = GetPlayer();
var cod_actividad = p.GetVar("cod_actividad");
var cod_diapositiva = p.GetVar("cod_diapositiva");

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

function Script39()
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
var intento_01 = p.GetVar("intento_01");

var intento_01 = window.getIntentos(cod_actividad, "NC34U5A01D01");
var intento_02 = window.getIntentos(cod_actividad, "NC34U5A01D02");

console.log(intento_01);
console.log(intento_02);
}

