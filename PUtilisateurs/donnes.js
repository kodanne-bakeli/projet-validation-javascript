async function remplirDonneesUser(idUser) {
    const refDocUser = doc(db, "users", idUser);
    const snapshotUser = await getDoc(refDocUser);

    if (snapshotUser.exists()) {
        const donneesUser = snapshotUser.data();

        document.getElementById("last-name").value = donneesUser.nom;
        document.getElementById("first-name").value = donneesUser.prenom;
        document.getElementById("email").value = donneesUser.email;
        document.getElementById("number").value = userData.téléphone;
        document.getElementById("date").value = userData["date de naissance"];
        document.getElementById("adresse").value = userData.adresse;
        document.getElementById("profession").value = userData.profession;
        document.getElementById("organisation").value = userData.organisation;
        document.getElementById("password").value = userData.motDePasse;
        document.getElementById("password2").value = userData.motDePasse;
    }
}

// Ajouter un écouteur d'événement de clic aux liens d'Users
const liensUsers = document.querySelectorAll('[data-user-id]');
liensUsers.forEach(lien => {
    lien.addEventListener('click', (event) => {
        event.preventDefault();
        const idUser = lien.getAttribute('data-user-id');
        remplirDonneesUser(idUser);
    });
});