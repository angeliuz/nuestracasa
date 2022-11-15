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
    const docRef = doc(db, "actividades", getUserIdConecta());
    var docSnap = await getDoc(doc(docRef, cod_actividad, cod_diapositiva));
    console.log(">Intentos:", docSnap.data().intentos);

    var intentos = docSnap.data().intentos;

    let indiceVariable = cod_diapositiva.slice(-2);

    localStorage.setItem(cod_diapositiva + "_intentos", intentos);
    window.player.SetVar("intento_" + indiceVariable, Number(localStorage.getItem(cod_diapositiva + "_intentos")));

    return parseInt(intentos);
}


export const setEstadoSolucionario = async (cod_actividad, cod_diapositiva) => {
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
    const docRef = doc(db, "actividades", getUserIdConecta());
    var docSnap = await getDoc(doc(docRef, cod_actividad, cod_diapositiva));
    console.log("Document data:", docSnap.data().solucion);

    var intentos = docSnap.data().solucion;

    return intentos;
}


export const setLogro = async (cod_actividad, cod_diapositiva, logro) => {
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
    var docSnap = await getDoc(doc(docRef, cod_actividad, cod_diapositiva));
    console.log("Logro:", docSnap.data().logro);

    var logro = docSnap.data().logro;

    return logro;
}

export const setRespuesta = async (cod_actividad, cod_diapositiva, respuesta) => {
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
    var docSnap = await getDoc(doc(docRef, cod_actividad, cod_diapositiva));
    console.log("Respuesta:", docSnap.data().respuesta);

    var respuesta = docSnap.data().respuesta;

    return respuesta;
}


const getUserIdConecta = () => {
    var str = localStorage.getItem('mm_data');
    var arregloData = new Array();
    arregloData = str.split(",");
    return arregloData[3]
}