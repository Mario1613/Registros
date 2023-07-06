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

export const saveRegistro = (title: string, description: string) => {
    addDoc(collection(db, "registro"), {
        title: title,
        description: description,
    });
};



export const getTask = (id: string) => getDoc(doc(db, "tasks", id));

export const onGetTasks = (callback: any) => onSnapshot(collection(db, "tasks"), callback);

export const deleteTask = (id: string) => deleteDoc(doc(db, `tasks`, id))


export const updateTask = (id: string, newFields: any) => {
    updateDoc(doc(db, 'tasks', id), newFields)

}
export const getTasks = () => getDocs(collection(db, "tasks"))




export { }