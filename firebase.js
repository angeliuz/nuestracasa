import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js';
import {
    getFirestore,
    addDoc,
    collection,
    getDoc,
    doc,
    setDoc,
    updateDoc,
    increment
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCphXPJ5urV4BgurtaICdCTRf8SZCC8UGI",
    authDomain: "nuestracasa-1c112.firebaseapp.com",
    projectId: "nuestracasa-1c112",
    storageBucket: "nuestracasa-1c112.appspot.com",
    messagingSenderId: "160424088618",
    appId: "1:160424088618:web:2b7e30e25b53282c329f53"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

//const increment = initializeApp.db.FieldValue.increment(1)

export const init = async () => {

    const docRef = doc(db, "actividades", getUserIdConecta());
    const docSnap = await getDoc(docRef);

    console.log(docSnap.data());

    if (!docSnap.exists()) {
        await setDoc(doc(db, "actividades", getUserIdConecta()), {})
            .then(async () => {
                console.log("listo")

            });
    } else {
        console.log("Ya existe el documento")
    }
}

export const setCodigoActividad = (cod_actividad) => {
    localStorage.setItem("cod_actividad", cod_actividad);
    console.log(cod_actividad);
}

export const setCodigoDiapositiva = async (cod_actividad, cod_diapositiva) => {
    // CONFIGURATION OF ACTIVITY AND SLIDE
    const docRef = doc(db, "actividades", getUserIdConecta());
    const docRef2 = doc(docRef, cod_actividad, cod_diapositiva);
    const docSnap = await getDoc(docRef2);

    if (!docSnap.exists()) {
        setDoc(doc(docRef, cod_actividad, cod_diapositiva), {})
            .then(async () => {
                console.log("Datos de diapo guardadas")
            });
        console.log("Diapositiva creada: ", cod_diapositiva);
    } else {
        console.log("Ya existe el documento")
    }
}

export const getCodigoDiapositiva = (cod_actividad, cod_diapositiva) => {
    localStorage.setItem("cod_diapositiva", cod_diapositiva);
    console.log("Codigo Diapositiva: ", cod_diapositiva);
}

export const setIntentos = async (cod_actividad, cod_diapositiva) => {
    const docRef = doc(db, "actividades", getUserIdConecta());
    var docSnap = await getDoc(doc(docRef, cod_actividad, cod_diapositiva));

    if (!docSnap.exists()) {
        console.log("NO existe");
    } else {
        await updateDoc(doc(docRef, cod_actividad, cod_diapositiva), {
            intentos: increment(1)
        }).then(async () => {
            docSnap = await getDoc(doc(docRef, cod_actividad, cod_diapositiva));
            console.log("Existe", docSnap.data()["intentos"]);
        })
    }
}


export const getIntentos = async (cod_actividad, cod_diapositiva) => {
    let indiceVariable = cod_diapositiva.slice(-2);
    let intentos = null;

    const docRef = doc(db, "actividades", getUserIdConecta());
    await getDoc(doc(docRef, cod_actividad, cod_diapositiva)).then(doc => {
        intentos = doc.data().intentos;
        localStorage.setItem(cod_diapositiva + "_intentos", doc.data().intentos);
        console.log("GET INTENTOS THEN TOTAL", doc.data().intentos);
        window.player.SetVar("intento_" + indiceVariable, Number(localStorage.getItem(cod_diapositiva + "_intentos")));
        return parseInt(intentos);
    })

    //console.log("Intentos:", docSnap.data().intentos);

    // var intentos = docSnap.data().intentos;

    // localStorage.setItem(cod_diapositiva + "_intentos", intentos);
    // window.player.SetVar("intento_" + indiceVariable, Number(localStorage.getItem(cod_diapositiva + "_intentos")));

}


export const setEstadoSolucionario = async (cod_actividad, cod_diapositiva) => {
    localStorage.setItem(cod_diapositiva + "_solucion", "true");
    const docRef = doc(db, "actividades", getUserIdConecta());
    var docSnap = await getDoc(doc(docRef, cod_actividad, cod_diapositiva));

    if (!docSnap.exists()) {
        console.log("No existe");
    } else {
        await updateDoc(doc(docRef, cod_actividad, cod_diapositiva), {
            solucion: true
        }).then(async () => {
            docSnap = await getDoc(doc(docRef, cod_actividad, cod_diapositiva));
            console.log("Estado Solución", docSnap.data()["solucion"]);
        })
    }
}

export const getEstadoSolucionario = async (cod_actividad, cod_diapositiva) => {
    let indiceVariable = cod_diapositiva.slice(-2);
    let solucion = null;
    const docRef = doc(db, "actividades", getUserIdConecta());
    await getDoc(doc(docRef, cod_actividad, cod_diapositiva)).then(doc => {
        solucion = doc.data().solucion;
        localStorage.setItem(cod_diapositiva + "_solucion", solucion);
        // console.log("Solución LS:", localStorage.getItem(cod_diapositiva + "_solucion"))
        console.log("GET SOLUCION FIREBASE", doc.data().solucion);
        solucion != undefined ? localStorage.setItem(cod_diapositiva + "_solucion", "true") : localStorage.setItem(cod_diapositiva + "_solucion", "false");
        solucion != undefined ? solucion : solucion = false;
        console.log("GET SOLUCION LOCALSTORE:", localStorage.getItem(cod_diapositiva + "_solucion"));
        console.log("GET SOLUCION SOLUCION:", solucion);
        window.player.SetVar("solucion_" + indiceVariable, localStorage.getItem(cod_diapositiva + "_solucion"));
        return solucion;
    })


}


export const setLogro = async (cod_actividad, cod_diapositiva, logro) => {
    localStorage.setItem(cod_diapositiva + "_logro", logro);
    const docRef = doc(db, "actividades", getUserIdConecta());
    var docSnap = await getDoc(doc(docRef, cod_actividad, cod_diapositiva));

    if (!docSnap.exists()) {
        console.log("No existe");
    } else {
        await updateDoc(doc(docRef, cod_actividad, cod_diapositiva), {
            logro: logro
        }).then(async () => {
            docSnap = await getDoc(doc(docRef, cod_actividad, cod_diapositiva));
            console.log("Logro: ", docSnap.data()["logro"]);
        })
    }
}

export const getLogro = async (cod_actividad, cod_diapositiva) => {
    const docRef = doc(db, "actividades", getUserIdConecta());
    await getDoc(doc(docRef, cod_actividad, cod_diapositiva)).then(doc => {
        console.log("Logro:", doc.data().logro);

        var logro = doc.data().logro;

        let indiceVariable = cod_diapositiva.slice(-2);

        localStorage.setItem(cod_diapositiva + "_logro", logro);
        window.player.SetVar("logro_" + indiceVariable, Number(localStorage.getItem(cod_diapositiva + "_logro")));

        return logro;
    });
}

export const setRespuesta = async (cod_actividad, cod_diapositiva, respuesta) => {
    let indiceVariable = cod_diapositiva.slice(-2);
    localStorage.setItem(cod_diapositiva + "_respuesta", respuesta);
    window.player.SetVar("respuesta_" + indiceVariable, Number(localStorage.getItem(cod_diapositiva + "_respuesta")));

    const docRef = doc(db, "actividades", getUserIdConecta());
    var docSnap = await getDoc(doc(docRef, cod_actividad, cod_diapositiva));

    if (!docSnap.exists()) {
        console.log("No existe");
    } else {
        await updateDoc(doc(docRef, cod_actividad, cod_diapositiva), {
            respuesta: respuesta
        }).then(async () => {
            docSnap = await getDoc(doc(docRef, cod_actividad, cod_diapositiva));
            console.log("Respuesta: ", docSnap.data()["respuesta"]);
        })
    }
}

export const getRespuesta = async (cod_actividad, cod_diapositiva) => {
    const docRef = doc(db, "actividades", getUserIdConecta());
    await getDoc(doc(docRef, cod_actividad, cod_diapositiva)).then(doc => {
        var respuesta = doc.data().respuesta;

        let indiceVariable = cod_diapositiva.slice(-2);

        localStorage.setItem(cod_diapositiva + "_respuesta", respuesta);
        window.player.SetVar("respuesta_" + indiceVariable, Number(localStorage.getItem(cod_diapositiva + "_respuesta")));

        console.log("Get Respuesta:", doc.data().respuesta);

        return respuesta;
    })

}

export const getTotal = async (cod_actividad) => {

    var logro_01_ls = Number(localStorage.getItem(cod_actividad + "D01_logro"));
    var logro_02_ls = Number(localStorage.getItem(cod_actividad + "D02_logro"));
    var logro_03_ls = Number(localStorage.getItem(cod_actividad + "D03_logro"));
    var logro_04_ls = Number(localStorage.getItem(cod_actividad + "D04_logro"));
    var logro_05_ls = Number(localStorage.getItem(cod_actividad + "D05_logro"));
    var logro_06_ls = Number(localStorage.getItem(cod_actividad + "D06_logro"));
    var logro_07_ls = Number(localStorage.getItem(cod_actividad + "D07_logro"));
    var logro_08_ls = Number(localStorage.getItem(cod_actividad + "D08_logro"));
    var logro_09_ls = Number(localStorage.getItem(cod_actividad + "D09_logro"));
    var logro_10_ls = Number(localStorage.getItem(cod_actividad + "D10_logro"));

    console.log("logro_01_ls", logro_01_ls);

    var sumaLogros = Number(logro_01_ls) + Number(logro_02_ls) + Number(logro_03_ls) + Number(logro_04_ls) + Number(logro_05_ls) + Number(logro_06_ls) + Number(logro_07_ls) + Number(logro_08_ls) + Number(logro_09_ls) + Number(logro_10_ls);
    var totalPorcentajes = 1000;

    var totalLogro = Math.round((sumaLogros / totalPorcentajes) * 100);

    localStorage.setItem(cod_actividad + "_totalLogro", String(totalLogro));
    console.log("Total logro: ", totalLogro);

    window.player.SetVar("porcentaje_total", Number(localStorage.getItem(cod_actividad + "_totalLogro")));

    console.log("Total logro: ", localStorage.getItem(cod_actividad + "_totalLogro"));
}


const getUserIdConecta = () => {
    var str = localStorage.getItem('mm_data');
    var arregloData = new Array();
    arregloData = str.split(",");
    return arregloData[3]
}
