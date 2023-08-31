const docref = doc(db, "cotisations", "pFMhZBC1hJF23fVGYRuF");
const querySnapshot = await getDoc(docref);

if (querySnapshot.exists()) {
    const cotis = querySnapshot.data()
    console.log(cotis)
    for (let i = 1; i < dateOne.length; i++) {
        tableOne.innerHTML += `<table>
        <thead>
        <tr>
        <th>Membres</th>
        <th>Date début</th>
        <th>Actions</th>
    </tr>
                                    </thead>
        <tbody>
        <tr>
            <th scope="row">${dateOne[i]}</th>
            <td>${cotis.debutDate}</td>
            <td class="montantcotise">${cotis.cotiseMontant}FCFA</td>
            <td class="text-primary fw-bold"> En attente</td>
            <td>
            <a href="#" class="text-black"><i class="bi bi-eye"></i></a>
            <a href="#" class="text-success"><i class="bi bi-arrow-up-square"></i></a>
        </td>
        </tr>
        
    </tbody>
    </table>
    `

    }
    console.log(" => ", cotis);
};