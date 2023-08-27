

firebase.initializeApp ({
    apiKey: "AIzaSyAdYSscG955-wSnJz3eD4EAKYSw7dnnDb8",
    authDomain: "validationjs-220cb.firebaseapp.com",
    projectId: "validationjs-220cb",
    storageBucket: "validationjs-220cb.appspot.com",
    messagingSenderId: "968244401042",
    appId: "1:968244401042:web:f6684d97e4168a23b0a74b"
});
// const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();


// const addForm = document.querySelector('#form-info');
// addForm.addEventListener('submit', getUser)
// function getUser(e) {
//     let prenom = document.getElementById('prenom').value;
//     let nom = document.getElementById('nom').value;
//     let email = document.getElementById('email').value;
//     let phone = document.getElementById('phone').value;

//         e.preventDefault();

//         db.collection("users").add({
//             prenom: prenom,
//             nom: nom,
//             email: email,
//             phone: phone
//         })
//         .then((docRef) => {
//             console.log("Document written with ID: ", docRef.id);
//             document.getElementById('prenom').value='';
//             document.getElementById('nom').value='';
//             document.getElementById('email').value='';
//             document.getElementById('phone').value='';
//         })
//         .catch((error) => {
//             console.error("Error adding document: ", error);
//         });
    
// };

let usersView = document.getElementById('informationGenerale');
let profilInfo = document.querySelector('#admin');
profilInfo.innerHTML = ''
db.collection("admin").onSnapshot((querySnapshot) => {
    usersView.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().nom}`);
        usersView.innerHTML +=     
        `<h4 class="p-2 fw-bold">Informations générales</h4>
        <div class="col d-flex justify-content-between border-bottom pb-3">
        <div class="col-md-8">Prénom</div>
        <div class="col-md-4 text-center" id="paraPrenom">${doc.data().prenom}</div>
      </div>
      <div class="col d-flex justify-content-between border-bottom pb-3">
        <div class="col-md-8">Nom</div>
        <div class="col-md-4 text-center" id="paraNom">${doc.data().name}</div>
      </div>
      <div class="col d-flex justify-content-between border-bottom pb-3">
        <div class="col-md-8">Statut</div>
        <div class="col-md-4 text-center" id="paraAdmin">${doc.data().admin}</div>
      </div>
      <div class="col d-flex justify-content-between border-bottom pb-3">
        <div class="col-md-7">Email</div>
        <div class="col-md-5 text-center" id="paraEmail">${doc.data().email}</div>
      </div>`

      profilInfo.innerHTML = 
      `<p class="titleProfil">Profil</p>
        <div class="pb-5 profil">
        <div class="profilAdmin">
            <img src="./images/Ellipse 82.png" class="rounded-circle" alt="img" id="photo">
        </div>
        <div class="name">
            <h3 class="fs-3 fw-bold" id="profilName">${doc.data().prenom} ${doc.data().name}</h3>
            <p class="fs-4 fw-bold" id="profilStatut">Admin</p>
        </div>
        </div>
        <div>
            <a href="editProfil.html">
                <button class="btn" id="editerProfil">Editer le profil</button>
            </a>
        </div>`
    });

});

// function deleteUser(id){
//     db.collection("users").doc(id).delete().then(() => {
//         console.log("Document successfully deleted!");
//     }).catch((error) => {
//         console.error("Error removing document: ", error);
//     });
// }









// let paraPrenom = document.getElementById('paraPrenom');
// let paraNom = document.getElementById('paraNom');
// let paraEmail = document.getElementById('paraEmail');
// let paraStatut = document.getElementById('paraStatut');
// let paraAdmin = document.getElementById('paraAdmin');

let profilName = document.getElementById('profilName');
let profilStatut = document.getElementById('profilStatut');


