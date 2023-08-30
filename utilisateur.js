// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs ,
  addDoc,
  doc,
  deleteDoc 
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
const  form = document.getElementById("form");
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

// fonction pour ajouter les utilisateurs
function ajouter() { 
  // Ajouter l'utilisateur
  addDoc(collection(db, "user"), {
    name: name.value,
    prenom: firstname.value,
    date: birth.value,
    profession: profession.value,
    email: email.value,
    telephone: telephone.value,
    adresse: adresse.value,
    organisation: organisation.value,
  });
};

// écoutons l'evenement lorsqu'on saisie des informations via le formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault();
  ajouter();
  
});


// recuperation des donnés
document.addEventListener("DOMContentLoaded", async (e) => {
  try {
    
    // Récupérer les données de la collection "users"
    const userSnapshot = await getDocs(collection(db, "user"));
    const usersData = [];
    userSnapshot.forEach((doc) => {
      usersData.push({ id: doc.id, ...doc.data() });
    });

    // Récupérer les données de la collection "cotisations"
    const cotisationsSnapshot = await getDocs(collection(db, "cotisations"));
    const cotisationsData = [];
    cotisationsSnapshot.forEach((doc) => {
    cotisationsData.push({ id: doc.id, ...doc.data() });
    });
    // Afficher les données récupérées
    // const user = usersData.data();
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${usersData[0].prenom} ${usersData[0].name}</td>
    <td>300.000 FCFA</td>
    <td>01/01/2022</td>
    <td class="d-flex gap-2 justify-content-center align-items-center">
    <div class="progress mt-2 w-75">
      <div class="progress-bar bg-dark progwidth" role="progressbar"
      aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <span class="progress-label">50%</span>
    </td>
    <td class="fw-semibold text">Actif</td>
    <td><i class="fa-solid fa-eye ms-4" data-bs-toggle="modal" data-bs-target="#example3Modal"></i>
        <i class="fa fa-archive"></i>
        <i class="fa fa-ban"></i>
    </td>
    `
    tbody.appendChild(tr);

    console.log("Données des utilisateurs:", usersData);
    console.log("Données des cotisations:", cotisationsData);
  } catch (error) {
      console.error("Erreur lors de la récupération des données:", error);
  }
});

