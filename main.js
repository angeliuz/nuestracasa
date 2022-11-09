import {
    init,
    setCodigoActividad,
    setCodigoDiapositiva,
    setEstadoSolucionario,
    setIntentos
}
    from "./firebase.js"

window.addEventListener("DOMContentLoaded", () => {

    init();
    window.setCodigoActividad = setCodigoActividad;
    window.setCodigoDiapositiva = setCodigoDiapositiva;
    window.setIntentos = setIntentos;
    window.setEstadoSolucionario = setEstadoSolucionario;

})