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
  const firestore= firebase.firestore();

  function addUser() {
    const email = document.getElementById('mail').value;
    const password = generateRandomPassword()

    firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
        const user = userCredential.user;

        firestore.collection('users').doc(user.uid).set({
            email: email,
            rule: "user"
        });

        document.getElementById("result").innerHTML = "Utilisateur ajouté avec succés.<br>Email : " + email + "<br>Mot de passe : " + password;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.Message;
        // Générer les erreurs....
        document.getElementById("result").innerHTML = "Erreur : " + errorMessage;
    });
  }