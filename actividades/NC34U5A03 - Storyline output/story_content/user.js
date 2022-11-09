function ExecuteScript(strId)
{
  switch (strId)
  {
      case "66UQPAlzDM9":
        Script1();
        break;
      case "5t4qmb5XVw8":
        Script2();
        break;
      case "6mKxA6YNWT1":
        Script3();
        break;
      case "5V6Dyie84kP":
        Script4();
        break;
      case "67EVjg0Emkm":
        Script5();
        break;
      case "5ZOmlwb3vsl":
        Script6();
        break;
      case "6CwWkJqLcyx":
        Script7();
        break;
      case "60Gb2Vv2dgV":
        Script8();
        break;
      case "6TvBr7NsKzO":
        Script9();
        break;
      case "6IQmyTWocfF":
        Script10();
        break;
      case "5vSyIhYB5RI":
        Script11();
        break;
      case "6FSz9xnyme8":
        Script12();
        break;
      case "5Ymftn9Tbiw":
        Script13();
        break;
      case "5VGTpYrJ9Mu":
        Script14();
        break;
      case "6KjvSHHKX1z":
        Script15();
        break;
      case "6efFN5Q5SmG":
        Script16();
        break;
      case "6pnyDtVyqA3":
        Script17();
        break;
      case "6Us7FU9wlzN":
        Script18();
        break;
      case "6VZcdz2L3yB":
        Script19();
        break;
      case "5Yz0vZvQ0yy":
        Script20();
        break;
      case "6Xr1wek4n60":
        Script21();
        break;
      case "6UII8UYJhsm":
        Script22();
        break;
      case "6FWKnnBeE3j":
        Script23();
        break;
      case "6j1naHMyfE6":
        Script24();
        break;
      case "5zIWT8wHdS8":
        Script25();
        break;
      case "5j61PTyaGD5":
        Script26();
        break;
      case "6iQX7ZsgkxC":
        Script27();
        break;
      case "6kDG8dAui0I":
        Script28();
        break;
      case "6Hc362NX7nT":
        Script29();
        break;
      case "5dow7RVJIrV":
        Script30();
        break;
      case "6D4WYvRzBoN":
        Script31();
        break;
      case "6EMFhE6xBz7":
        Script32();
        break;
      case "6rkZreHgWxk":
        Script33();
        break;
      case "6mYXNqxzA8j":
        Script34();
        break;
      case "6OtlWGGEeAA":
        Script35();
        break;
      case "6VgZmfBPmbq":
        Script36();
        break;
      case "6IIIsa2gaCm":
        Script37();
        break;
      case "6U21PqkLNGW":
        Script38();
        break;
      case "5sA6FC21yY4":
        Script39();
        break;
      case "6PguzFUfjZw":
        Script40();
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

