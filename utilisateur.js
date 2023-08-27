// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs ,
  addDoc
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
// Initialize Firebase Firestore
const db = getFirestore(app);

// Récupération des éléments du DOM
const  form = document.querySelector("form");
const name = document.getElementById("nom");
const firstname = document.getElementById("pre");
const birth = document.getElementById("date");
const profession = document.getElementById("prof");
const email = document.getElementById("mail");
const telephone = document.getElementById("phone");
const adresse = document.getElementById("adr");
const organisation = document.getElementById("org");
let tbody = document.getElementById("tbody");

// ecoutez l'evenement lors du chargement de la page avant l'affichage des données

document.addEventListener("DOMContentLoaded", async (e) => {
  // le code pour créer et afficher le tableau ici
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    const user = doc.data();
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${user.prenom} ${user.name}</td>
    <td>300.000 FCFA</td>
    <td>01/01/2022</td>
    <td class="d-flex gap-2 justify-content-center align-items-center">
        <div class="progress mt-2 w-75">
            <div class="progress-bar bg-dark progwidth" id="t2" role="progressbar"
                aria-valuenow="57" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <span class="progress-label">57%</span>
    </td>
    <td class="fw-semibold text-danger">Bloqué</td>
    <td><i class="fa-solid fa-eye ms-4"></i>
        <i class="fa fa-archive"></i>
        <i class="fa fa-ban text-danger"></i>
    </td>
    `
    tbody.appendChild(tr);
  });
});

// écoutons l'evenement lorsqu'on saisie des informations via le formulaire
const bajouter = document.getElementById("ajouter");
bajouter.addEventListener("click", (e) => {
  // e.preventDefault();
  ajouter();
});

// fonction pour ajouter les utilisateurs
function ajouter() {
  const nom = name.value;
  const prenom = firstname.value;
  const date = birth.value;
  const prof = profession.value;
  const mail = email.value;
  const phone = telephone.value;
  const address = adresse.value;
  const org = organisation.value;
 
  // Ajouter l'utilisateur
  addDoc(collection(db, "users"), {
    name: nom,
    prenom: prenom,
    date: date,
    profession: prof,
    email: mail,
    telephone: phone,
    adresse: address,
    organisation: org
  });
  alert("User added");
};





