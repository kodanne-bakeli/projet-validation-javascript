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
  
})
let membreActifs = 0;
// recuperation des donnés
document.addEventListener("DOMContentLoaded", async (e) => {
  try {
    
    // Récupérer les données de la collection "users"
    const userSnapshot = await getDocs(collection(db, "user"));
    const usersData = [];
    let user;
    userSnapshot.forEach((doc) => {
      user = doc.data();
      // console.log(user);
      user.id = doc.id;
      // console.log(user);
      usersData.push(user);
      membreActifs = usersData.length;
       
    });
    
    // Récupérer les données de la collection "cotisations"
    const cotisationsSnapshot = await getDocs(collection(db, "cotisations"));
    const cotisationsData = [];
    // let cotise;
    cotisationsSnapshot.forEach((doc) => {
    cotisationsData.push({ id: doc.id, ...doc.data() });
    });
    // gestions des cartes sur l'affichage des tableaux
    // const troisCartes = document.querySelector(".les-trois-card-du-haut");
    const carte1 = document.getElementById("box1");
    const carte2 = document.getElementById("box2");
    const carte3 = document.getElementById("box3");
    const totalEffectif = document.getElementById("totalEff");
    
    const table1 = document.getElementById("table1");
    const table2 = document.getElementById("table2");
    const table3 = document.getElementById("table3");
   // Par défaut, affichez le tableau 3 et masquez les autres
    table1.style.display = "none";
    table2.style.display = "none";
    // Ajoutez des gestionnaires d'événements de clic aux cartes
    carte1.addEventListener("click", () => {
      table1.style.display = "block";
      // carte1.className = "vert";
      table2.style.display = "none";
      table3.style.display = "none";
    });

    carte2.addEventListener("click", () => {
      table1.style.display = "none";
      table2.style.display = "block";
      table3.style.display = "none";
      // carte1.className = "white";
      // carte2.className = "vert";
    });

    carte3.addEventListener("click", () => {
      table1.style.display = "none";
      table2.style.display = "none";
      table3.style.display = "block";
      // carte3.className = "vert";
    });
    // determination du nombre de membres dans chaque carte
    totalEffectif.textContent =  `${membreActifs} Membres` ;
   
    // Afficher les données récupérées
    usersData.forEach((usData, index) => {
      const cotiseData = cotisationsData[index]; 
      let tr = document.createElement("tr");
      // gestion des actions
      const seuil = 300000;
      const pourcentage = (cotiseData.montantCotise / seuil) * 100;

      // Ajout des cellules de données pour les utilisateurs
      tr.innerHTML += `
        <td>${usData.prenom} ${usData.name}</td>
        <td class="seuil">300.000 FCFA</td>
        <td>01/01/2022</td>
        <td class="d-flex gap-2 justify-content-center align-items-center">
          <div class="progress mt-2 " style="height: 5px">
            <div class="progress-bar " role="progressbar" aria-valuenow=""
            aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <span class="progress-label">%</span>
        </td>
        <td class="text fw-semibold "></td>
        <td><i class="fa-solid fa-eye ms-4" data-bs-toggle="modal" data-bs-target="#example3Modal"></i>
          <i  class="fa fa-archive"></i>
          <i class="fa fa-ban"></i>
        </td>
      `
      //  selectiooner les elements du tableau
      const progressBar = tr.querySelector(".progress-bar");
      const progressLabel = tr.querySelector(".progress-label");
      const statut = tr.querySelector(".text");
      const boutBloque = tr.querySelector(".fa-ban");
      const archive = tr.querySelector(".fa-archive");

      // Mettez à jour la largeur de la barre de progression et le texte dans le label
      // c'est le debut du code qui n'a pas marché pour la barre de progression
      function updateProgressBar(pourcentage) {
        progressBar.style.width = `${pourcentage}%`;
        progressBar.setAttribute('aria-valuenow', pourcentage);
        progressLabel.textContent = `${pourcentage.toFixed(0)}%`;
      }
      // dethyuç_
      let montant = cotiseData.montantCotise;
      function simulateProgress() {
        if (montant <= 100) {
            updateProgressBar(montant);
            montant += 10;
            // setTimeout(simulateProgress, 1000);
        }
      }
      simulateProgress();
    // fin du code
    // ce sont ces 3 lignes de codes qui ont fonctionné avec le pourcentage
     progressBar.style.width = `${pourcentage}%`;
     progressBar.setAttribute('aria-valuenow', pourcentage);
     progressLabel.textContent = `${pourcentage.toFixed(0)}%`;

    //  gestion des statuts
    if (cotiseData.montantCotise > 25000) {
      statut.textContent = "Actif";
      statut.className = "text";
      boutBloque.style.color = "black";
    }
     //Ecoutons l'archivage des utilisateurs

     archive.addEventListener('click', () => {
      if (pourcentage.toFixed(0) == 100) {
        alert("Vous avez archiver cet utilisateur");
      }else{
        alert("Assurez-vous que l'utilisateur a atteind les 100%")
      }
     });
    //  ecouter le bloquage des utilisateurs

    boutBloque.addEventListener('click', () => {
      if (cotiseData.montantCotise < 25000) {
        statut.textContent = "Bloqué";
        statut.className = "text-danger";
        boutBloque.style.color = "red";
      }else{
        alert("Merci de verifier la progression de l'utilisateur")
      }
     });

    tbody.appendChild(tr);
    
  });

    console.log("Données des utilisateurs:", usersData);
    console.log("Données des cotisations:", cotisationsData);
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
  }
});









