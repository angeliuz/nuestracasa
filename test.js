import {
    init,
    setCodigoActividad,
    setCodigoDiapositiva,
    setEstadoSolucionario,
    setIntentos,
    getIntentos,
    getEstadoSolucionario
}
    from "./firebase.js"

window.addEventListener("DOMContentLoaded", () => {
    console.log("App Cargada")

    init();

    // setCodigoActividad("NC34U5A01")
    setCodigoDiapositiva("NC34U5A01", "NC34U5A01D01");


    document.getElementById("btn_setIntentos").addEventListener("click", () => {
        setIntentos("NC34U5A01", "NC34U5A01D01");
    })
    document.getElementById("btn_setSolucionario").addEventListener("click", () => {
        setEstadoSolucionario("NC34U5A01", "NC34U5A01D01")
    })
    document.getElementById("btn_getIntentos").addEventListener("click", () => {
        getIntentos("NC34U5A01", "NC34U5A01D01")
    })
    document.getElementById("btn_getSolucionario").addEventListener("click", () => {
        getEstadoSolucionario("NC34U5A01", "NC34U5A01D01")
    })

})