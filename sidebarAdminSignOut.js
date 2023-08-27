// let menuElements = document.querySelectorAll(".sidebar #navi #nav-ul li");

// =======STYLE DES ELEMENTS DU MENU===============
// menuElements.forEach((elem) => {
//   elem.addEventListener("click", () => {
//     let largeurEcran = window.innerWidth;
//     if (largeurEcran > 768) {
//       // Pour enlever le style
//       menuElements.forEach((autresElem) => {
//         autresElem.classList.remove("style-nav-elem");
//       });

//       // Pour ajouter le style
//       elem.classList.add("style-nav-elem");
//       console.log(largeurEcran);
//     } else {
//       // window.addEventListener('resize', () =>{
//       elem.classList.remove("style-nav-elem");
//       // })
//     }
//   });
// });
// =============================================

// ===========DROPDOWN PERSONNALISE=============
// let closeModalBtn = document.getElementById("closeModalBtn");
// let myModal = document.getElementById("myModal");
// let btnModal = document.getElementById("header-btn-down");

// btnModal.addEventListener("click", function () {
//   myModal.style.display = "block";
// });

// closeModalBtn.addEventListener("click", function () {
//   myModal.style.display = "none";
// });

// window.addEventListener("click", function (event) {
//   let displayDropDown = document.getElementsByClassName(
//     "unNomDeClasseSpecial"
//   )[0];
//   if (
//     event.target.parentElement.parentElement === displayDropDown &&
//     myModal.style.display === "block"
//   ) {
//     myModal.style.display = "none";
//   }
// });
// =============================================

// let start = document.getElementById("start");
// let param_icon = document.getElementById("link-animation-start");
// let declencheur = document.getElementById("link-animation-start-param");
// let stoppeur = document.getElementById("link-animation-stop-param");
// let linkAnim = document.querySelectorAll("#start .link-animation");

// Animation des boutons déclencheur et stoppeur des icones du dropup
// declencheur.style.transition = setTimeout(() => {
//   "3s ease-in-out";
// }, 100);

// Appliquer un display par défaut aux icones du dropup et au bouton qui stop
// stoppeur.style.display = "none";
// linkAnim.forEach((elem) => {
//   elem.style.display = "none";
// });

// Fonction pour faire apparaitre les boutons dropup
// declencheur.onclick = function () {
//   linkAnim.forEach((elem) => {
//     elem.style.display = "inline";
//     setTimeout(() => {
//       start.classList.add("active");
//       start.classList.remove("desactive");
//     }, 5);
//   });
//   stoppeur.style.display = "inline";
//   declencheur.style.display = "none";
// };

// Fonction pour faire disparaitre les boutons dropDOWN
// stoppeur.onclick = function () {
//   start.classList.add("desactive");
//   start.classList.remove("active");
//   linkAnim.forEach((elem) => {
//     setTimeout(() => {
//       elem.style.display = "none";
//     }, 5);
//   });
//   stoppeur.style.display = "none";
//   declencheur.style.display = "inline";
// };

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

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
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Récupération de l'élément du DOM
const deconnexionButton = document.getElementById("deconnexionButton");
console.log(deconnexionButton)
// Déconnexion
deconnexionButton.addEventListener("click", () => {
  auth
    .signOut()
    .then(() => {
      alert("User logged out successfully");
      toggleButtons(false);
    })
    .catch((error) => {
      alert("Logout error:", error.message);
    });
});

// Vérifie l'état de l'authentification à chaque chargement de page
auth.onAuthStateChanged((user) => {
  if (user) {
    window.location.href = "cotisations.html";
  } else {
    window.location.href = "connexion.html";
  }
});