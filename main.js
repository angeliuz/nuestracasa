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
    getRespuesta
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

    var player = null;

})