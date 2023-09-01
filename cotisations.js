let URL = "http://localhost:3000/users";

// montant seuil des cotisations 
let seuil = 300000;

// recuperation des données et afficher
let tbody = document.querySelector("#firstTable tbody");
// let montantTotalCotiseparUtilisateur = 0;
// let montantTotalCotiseParMoisDeTousLesUtilisateurs = 0;
fetch(URL, {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
})
    .then((response) => response.json())
    .then((users) => {
        console.log(users);
        let montantTotalCotiseEnMai = 0;
        let montantTotalCotiseEnJuin = 0;
        let montantTotalCaisse = 0;
        // je stocke les totaux de chaque mois
        let montantTotalCotiseParMois = {
            0: 0,  //janvier
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
            11: 0, //decembre
        }
        users.forEach((user, index) => {
            user.cotisations.forEach((cotisation) => {
                const dateCotisation = new Date(cotisation.dateCotisation);
                // console.log(dateCotisation);
                const month = dateCotisation.getMonth();
                // console.log(month);

                // Accumuler le montant de cotisation pour le mois actuel
                montantTotalCotiseParMois[month] += parseFloat(cotisation.montantCotisation);

                if (month == 4) {
                    montantTotalCotiseEnMai += parseFloat(cotisation.montantCotisation);
                }
                if (month == 5) {
                    montantTotalCotiseEnJuin += parseFloat(cotisation.montantCotisation);
                }

            })

            let cardMai = document.querySelector(".cardMai");
            cardMai.innerHTML = ` <h6> Mai </h6>
      <h5> ${montantTotalCotiseEnMai} FCFA</h5>
      `
            let cardJuin = document.querySelector(".cardJuin");
            cardJuin.innerHTML = ` <h6> Juin </h6>
      <h5> ${montantTotalCotiseEnJuin} FCFA</h5>
      `
            // Calculer la somme totale de toutes les cotisations pour tous les mois
            for (const monthTotal of Object.values(montantTotalCotiseParMois)) {
                montantTotalCaisse += monthTotal;
            }
            console.log(montantTotalCaisse);
            // Calcul de la somme des cotisations pour l'utilisateur actuel
            let montantTotalCotiseparUser = user.cotisations.reduce((total, cotisation) => {
                total = total + parseFloat(cotisation.montantCotisation);
                return (total);
            }, 0)

            let tr1 = document.createElement("tr");
            tr1.innerHTML = ` 
        <td>${users[index].prenom} ${users[index].name} </td>
        <td>${users[index].cotisations[index].dateCotisation} </td>
        <td> ${montantTotalCotiseparUser} FCFA </td>
        <td>${seuil - montantTotalCotiseparUser} FCFA </td>
        <td><button type="button" class="btn  btn-sm btn-confirmer my-0 fw-bold text-light" onclick="boutonConfirmer(this)">confirmer</button>
        </td>
        `
            tr1.classList.add("fade-in-row-before");
            tbody.appendChild(tr1);
            setTimeout(() => {
                tr1.classList.add("fade-in-row-after");
            }, 600)
            console.log(montantTotalCaisse);
        })
        let cardTotalCaisse = document.querySelector(".cardTotalCaisse");
        cardTotalCaisse.innerHTML = ` <h6> Total caisse </h6>
        <h5> ${montantTotalCaisse} FCFA </h5>
        <div class="progress pb-1 rounded-5 my-1" role="progressbar" aria-label="Basic example"
                                    aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style="height:5px">
                                    <div class="progress-bar  rounded-5"
                                        style="width: 77%  ; background-color:#20df7f ;"></div>
                                </div>
                                <h6 class="text-end text-secondary">77% du seuil</h6>
        `
    })
    .catch((error) => {
        console.log("erreur erreur ", error)
    })

function boutonConfirmer(button) {
    button.style.display = "none";

    let messageConfirmation = document.createElement("p");
    messageConfirmation.textContent = "Validé";
    messageConfirmation.style.color = "#20df7f";
    messageConfirmation.style.marginBottom = 0;

    let td = button.parentElement;
    td.appendChild(messageConfirmation);
}

