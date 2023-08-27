firebase.initializeApp ({
    apiKey: "AIzaSyAdYSscG955-wSnJz3eD4EAKYSw7dnnDb8",
    authDomain: "validationjs-220cb.firebaseapp.com",
    projectId: "validationjs-220cb",
    storageBucket: "validationjs-220cb.appspot.com",
    messagingSenderId: "968244401042",
    appId: "1:968244401042:web:f6684d97e4168a23b0a74b"
});
let db = firebase.firestore();


let profilInfo = document.querySelector('#user');
let prenom = document.getElementById('inputPrenom');
let nom = document.getElementById('inputNom');
let email =document.getElementById('inputEmail');
let phone = document.getElementById('inputPhone');
let mettreAjour = document.querySelector('.bttn a');
mettreAjour.innerHTML = '';
db.collection("users").onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().name}`);
        profilInfo.innerHTML = ''
      profilInfo.innerHTML = 
      `<p class="titleProfil">Profil</p>
        <div class="pb-5 profil">
            <div class="profilAdmin">
                <img src="./images/profil.png" class="rounded-circle" alt="img" id="photo">
            </div>
            <div class="name">
                <h3 class="fs-3 fw-bold" id="profilName">${doc.data().prenom} ${doc.data().name}</h3>
                <p class="fs-4 fw-bold" id="profilStatut">Admin</p>
            </div>
        </div>`
        prenom.value = doc.data().prenom;
        nom.value = doc.data().name;
        email.value = doc.data().email;
        phone.value = doc.data().telephone;

        mettreAjour.innerHTML = `<button class="btn" type="submit" onclick="updateInfo('${doc.id}', '${doc.data().prenom}' , '${doc.data().nom}' , '${doc.data().email}' , '${doc.data().telephone}')">Mettre à jour</button>`
    });

});

// function updateInfo(name){
//         var washingtonRef = db.collection("admin").doc(name);
//        // Set the "capital" field of the city 'DC'
//         return washingtonRef.update({
//            nom: name
//        })
//        .then(function() {
//             alert("Document successfully updated!");
//             // bttn.innerHTML = `<button type="submit" class="btn btn-success w-100" id="submit">Ajouter</button>`;
//             document.getElementById('inputPrenom').value = '';
//             document.getElementById('inputNom').value = '';
//             document.getElementById('inputEmail').value = '';
//             document.getElementById('inputPhone').value = '';
//             // location.reload();
//        })
//        .catch((error) => {
//            // The document probably doesn't exist.
//            console.error("Error updating document: ", error);
//        });
// }





// const file = document.querySelector('#file');
// const uploadButton = document.querySelector('#uploadButton');
// let img = document.querySelector('#photo')

// file.addEventListener('change' , function(){
//     let chosedFile = this.files[0];
//     if(chosedFile){
//         const reader = new FileReader();

//         reader.addEventListener('load' , function(){
//             img.setAttribute('src' , reader.result);
//         })

//         reader.readAsDataURL(chosedFile);
//     }
// })