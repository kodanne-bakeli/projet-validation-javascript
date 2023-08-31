let URL = "  http://localhost:3000/users";


// id aléatoire généré .
let timestamp = Date.now();
let id = timestamp.toString();

function validateForm1() {
    let nom = document.getElementById("nom").value;
    let firstname = document.getElementById("pre").value;
    let birth = document.getElementById("date").value;
    let profession = document.getElementById("prof").value;
    let email = document.getElementById("mail").value;
    let telephone = document.getElementById("phone").value;
    let adresse = document.getElementById("adr").value;
    let organisation = document.getElementById("org").value;
    if (nom == "") {
        alert("saisissez votre nom !")
        return false;
    }
    if (firstname == "") {
        alert("saisissez votre prénom !")
        return false;
    }
    if (profession == "") {
        alert("saisissez votre profession !")
        return false;
    }
    if (birth == "") {
        alert("saisissez votre date de naissance !")
        return false;
    }
    if (email == "") {
        alert("saisissez votre email !")
        return false;
    } else if (!email.includes("@")) {
        alert("Invalid Email Address '@' is required !")
        return false;
    }
    if (telephone == "") {
        alert("saisissez votre numéro de telephone !")
        return false;
    } else if (Math.sign(telephone) == -1 || telephone <= 0) {
        alert("saisissez un numéro de téléphone valide")
        return false;
    }
    if (adresse == "") {
        alert("saisissez votre adresse !")
        return false;
    }
    if (organisation == "") {
        alert("saisissez votre organisation !")
        return false;
    }
    return true;
}
function validateForm2() {
    let dateCotisation = document.getElementById("dateDebut").value;
    let montantCotisation = document.getElementById("montantCotise").value;
    if (dateCotisation == "") {
        alert("saisissez la date de cotisation !")
        return false;
    }
    if (montantCotisation == "" || Math.sign(montantCotisation) == -1 || montantCotisation <= 0) {
        alert("saisissez un montant valide !")
        return false;
    }
    return true;
}
let newUser;
function addInfosOfUsers() {
    let nom = document.getElementById("nom").value;
    let firstname = document.getElementById("pre").value;
    let birth = document.getElementById("date").value;
    let profession = document.getElementById("prof").value;
    let email = document.getElementById("mail").value;
    let telephone = document.getElementById("phone").value;
    let adresse = document.getElementById("adr").value;
    let organisation = document.getElementById("org").value;
    if (validateForm1() == true) {
        newUser = {
            "id": id,
            "address": adresse,
            "date": birth,
            "email": email,
            "name": nom,
            "organisation": organisation,
            "prenom": firstname,
            "profession": profession,
            "telephone": telephone,
            "cotisations": []
        }
        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then((response) => response.json())
            .then((user) => alert("L'utilisateur a été ajouté avec succès !", user))
            .catch((error) => {
                console.log("erreur lors de l'ajout du nouvel utilisateur", error)
            })
    }
}

fetch(URL, {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
})
    .then((response) => response.json())
    .then((users) => {
        console.log(users);
        function addInfosOfCotisations() {
            let dateCotisation = document.getElementById("dateDebut").value;
            let montantCotisation = document.getElementById("montantCotise").value;

            if (validateForm2() == true) {
                
                if(users[0].cotisations.length < 12){
                    let newCotisations = {
                        dateCotisation : dateCotisation,
                        montantCotisation : montantCotisation
                    }
                    
                    users[0].cotisations.push(newCotisations);
                    fetch(`${URL}/${users[0].id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(users[0])
                    })
                        .then(response => response.json())
                        .then(data => {
                            alert("Cotisation ajoutée avec succès !");
                        })
                        .catch(error => {
                            console.error("Erreur lors de la mise à jour de la cotisation :", error);
                        });
                        console.log(users[0].cotisations.length);
                }else{
                    alert("vous avez atteint votre limite de cotisations !")
                }
            }
        }
        const addUserDetailsOfCotisations = document.getElementById("enregistrerCotisation");
        addUserDetailsOfCotisations.addEventListener("click", function (e) {
            e.preventDefault();
            addInfosOfCotisations()
        });
    })
    .catch((error) => {
        console.log("erreur pas méchante quelque part", error)
    })

// les evenements .
const addUserInfos = document.getElementById("ajouter");
addUserInfos.addEventListener("click", addInfosOfUsers);
