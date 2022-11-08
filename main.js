import {
    init,
    setCodigoActividad,
    setCodigoDiapositiva,
    setEstadoSolucionario,
    setIntentos
}
    from "./firebase.js"

window.addEventListener("DOMContentLoaded", () => {
    //     console.log("App Cargada")

    init();
    window.setCodigoActividad = setCodigoActividad;
    window.setCodigoDiapositiva = setCodigoDiapositiva;
    window.setEstadoSolucionario = setEstadoSolucionario;
    window.setIntentos = setIntentos;

    //     // setCodigoActividad("NC34U5A01")
    //     setCodigoDiapositiva("NC34U5A01", "NC34U5A01D01");


    //     document.getElementById("btn_intentos").addEventListener("click", () => {
    //         setIntentos("NC34U5A01", "NC34U5A01D01");
    //     })
    //     document.getElementById("btn_solucionario").addEventListener("click", () => {
    //         setEstadoSolucionario("NC34U5A01", "NC34U5A01D01")
    //     })

})