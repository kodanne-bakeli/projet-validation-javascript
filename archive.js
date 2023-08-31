import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    addDoc,
    doc,
    updateDoc,
    deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdYSscG955-wSnJz3eD4EAKYSw7dnnDb8",
    authDomain: "validationjs-220cb.firebaseapp.com",
    projectId: "validationjs-220cb",
    storageBucket: "validationjs-220cb.appspot.com",
    messagingSenderId: "968244401042",
    appId: "1:968244401042:web:f6684d97e4168a23b0a74b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase firestore
const db = getFirestore(app);
let table =document.querySelector(".table")
window.addEventListener("DOMContentLoaded", async (e) => {
const docref = doc(db, "cotisations", "pFMhZBC1hJF23fVGYRuF");
const docRef = doc(db, "user");
const querySnapshot = await getDoc(docref);
const qerySnapshot = await getDoc(docRef);

if (querySnapshot.exists() && qerySnapshot.exists()) {
    const cotis = querySnapshot.data()
    const user = qerySnapshot.data()
    console.log(cotis)
        table.innerHTML += `<table>
        <thead>
        <tr>
        <th>Membres</th>
        <th>Date début</th>
        <th>Actions</th>
    </tr>
                                    </thead>
        <tbody>
        <tr>
            <th scope="row">${user.name}</th>
            <td>${cotis.debutDate}</td>
            <td>
            <a href="#" class="text-black"><i class="bi bi-eye"></i></a>
            <a href="#" class="text-success"><i class="bi bi-arrow-up-square"></i></a>
        </td>
        </tr>
        
    </tbody>
    </table>
    `
    };
})
