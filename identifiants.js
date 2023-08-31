// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdYSscG955-wSnJz3eD4EAKYSw7dnnDb8",
    authDomain: "validationjs-220cb.firebaseapp.com",
    projectId: "validationjs-220cb",
    storageBucket: "validationjs-220cb.appspot.com",
    messagingSenderId: "968244401042",
    appId: "1:968244401042:web:f6684d97e4168a23b0a74b",
};

// Initialisation Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

// Fonction pour ajouter un utilisateur à la base de données
function addUser() {
    const email = document.getElementById("email").value;
    const password = generateRandomPassword();

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Utilisateur enregistré avec succès
            const user = userCredential.user;

            // Ajouter l'utilisateur
            firestore.collection("users").doc(user.uid).set({
                email: email,
                role: "user"
            });

            // Afficher les identifiants
            document.getElementById("result").innerHTML = "Utilisateur ajouté avec succès.<br>Email : " + email + "<br>Mot de passe : " + password;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode === "auth/weak-password") {
                document.getElementById("result").innerHTML = "Erreur : Le mot de passe est trop faible. Utilisez un mot de passe plus fort.";
            } else if (errorCode === "auth/email-already-in-use") {
                document.getElementById("result").innerHTML = "Erreur : Cette adresse e-mail est déjà utilisée.";
            } else {
                document.getElementById("result").innerHTML = "Erreur : " + errorMessage;
            }
        });
}

// Mot de passe aléatoire
    function generateRandomPassword() {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const passwordLength = 6;
        let password = "";

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset.charAt(randomIndex);
        }

        return password;
    }