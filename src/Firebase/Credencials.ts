import React from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    getDoc,
    onSnapshot,
    deleteDoc,
    doc,
    updateDoc
} from "firebase/firestore";
import { Registro } from "../models/GlobalTypes";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnuTCssQMSYbhmWF2x7RGNDNu8lyO8zhY",
    authDomain: "registro-95d0f.firebaseapp.com",
    projectId: "registro-95d0f",
    storageBucket: "registro-95d0f.appspot.com",
    messagingSenderId: "971620289397",
    appId: "1:971620289397:web:85d5a24ce158159d60e13c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore();

/**
 * 
 * @param values se tiene que pasar un objeto con sus datos de tipo registro
 * @returns void
 */
export const saveRegistro = async (values: Registro): Promise<string> => {
    const docRef = await addDoc(collection(db, "registro"), values);
    return docRef.id;
};


/**
 * 
 * @param id pasamos el id del registro que deseamos obtener
 * @returns 
 */
export const getRegistro = (id: string) => getDoc(doc(db, "registro", id));

export const onGetRegistros = (callback: any) => onSnapshot(collection(db, "registro"), callback);

/**
 * 
 * @param id se pasa el id del registro que seamos eliminar
 * @returns retorna un estatus
 */
export const deleteRegistro = (id: string) => deleteDoc(doc(db, `registro`, id))


export const updateRegistro = (id: string, newFields: any) => {
    updateDoc(doc(db, 'registro', id), newFields)

}
export const getRegistros = () => getDocs(collection(db, "registro"))




export { }