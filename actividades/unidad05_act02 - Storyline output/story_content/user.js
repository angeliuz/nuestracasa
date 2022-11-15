function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5uMlA22cqD8":
        Script1();
        break;
      case "6QrIeK8OK2H":
        Script2();
        break;
      case "6LcM4pO8PIH":
        Script3();
        break;
      case "5eLZbkrEbko":
        Script4();
        break;
      case "6VhAO2Y913N":
        Script5();
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
var a = p.GetVar("drag1");
var b = p.GetVar("drag2");
var c = p.GetVar("drag3");
var d = p.GetVar("drag4");
var respuesta = p.GetVar("respuesta");

var respuesta = (a.toString() + b.toString() + c.toString() + d.toString());

p.SetVar("respuesta","respuesta");

console.log("respuesta " + respuesta);
console.log(a,b,c,d);
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

window.setEstadoSolucionario(cod_actividad, cod_diapositiva)

console.log("estado solucionario: ",window.getEstadoSolucionario(cod_actividad, cod_diapositiva));
}

