import {
    init,
    setCodigoActividad,
    setCodigoDiapositiva,
    setEstadoSolucionario,
    getEstadoSolucionario,
    setIntentos,
    getIntentos,
    setLogro,
    getLogro,
    setRespuesta,
    getRespuesta,
    getTotal,
    getRespuestaMultiple
}
    from "./firebase.js"

window.addEventListener("DOMContentLoaded", () => {

    init();
    window.setCodigoActividad = setCodigoActividad;
    window.setCodigoDiapositiva = setCodigoDiapositiva;
    window.setIntentos = setIntentos;
    window.getIntentos = getIntentos;
    window.setEstadoSolucionario = setEstadoSolucionario;
    window.getEstadoSolucionario = getEstadoSolucionario;
    window.setLogro = setLogro;
    window.getLogro = getLogro;
    window.setRespuesta = setRespuesta;
    window.getRespuesta = getRespuesta;
    window.getTotal = getTotal;
    window.getRespuestaMultiple = getRespuestaMultiple;

    var player = null;

})