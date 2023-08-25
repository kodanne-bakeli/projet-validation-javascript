// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getFirestore,
  addDoc,
  collection,
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
const name = document.getElementById("nom");
const firstname = document.getElementById("prenom");
const birth = document.getElementById("date");
const profession = document.getElementById("prof");
const email = document.getElementById("mail");
const telephone = document.getElementById("phone");
const adresse = document.getElementById("address");
const organisation = document.getElementById("org");
const motDePasse = document.getElementById("password");
const admin = document.getElementById("statut");

const addUser = document.getElementById("inscrire");

// Add function
function AddData() {
  const nom = name.value;
  const prenom = firstname.value;
  const date = birth.value;
  const prof = profession.value;
  const mail = email.value;
  const phone = telephone.value;
  const address = adresse.value;
  const org = organisation.value;
  const password = motDePasse.value;
  const statut = admin.value;

  // Ajouter l'admin
  addDoc(collection(db, "users"), {
    name: nom,
    prenom: prenom,
    date: date,
    profession: prof,
    email: mail,
    telephone: phone,
    adresse: address,
    organisation: org,
    motDePasse: password,
    admin: statut,
  });
  alert("User added");
}

// Event Listener
addUser.addEventListener("click", AddData);
