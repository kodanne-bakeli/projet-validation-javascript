let tableOne = document.getElementById("tableOne")
let tableTwo =document.getElementById("tableTwo")
let main =document.getElementsByClassName("table-responsive")
let date =new Date()
let dateOne = ["","Janvier", "Février", "Mars", "Avril", "Mai", "Juin"]
let dateTwo = ["","Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"]
for (let i= 1; i< dateOne.length; i++) {
    tableOne.innerHTML += `<table>
    
    <tbody>
    <tr>
        <th scope="row">${dateOne[i]}</th>
        <td>01/0${i}/2023</td>
        <td>25.000FCFA</td>
        <td class="text-primary fw-bold"> En attente</td>
        <td><i class="bi bi-eye" data-bs-toggle="modal"
                data-bs-target="#exampleModal1"></i>
            <i class="bi bi-pencil-square"></i>
        </td>
    </tr>
    
</tbody>
</table>
`

}

function Next(){
    tableTwo.innerHTML=`
    <thead>
 <tr>
<th scope="col" class="bg-success text-primary">Mois</th>
<th scope="col" class="bg-success text-primary">Date</th>
<th scope="col" class="bg-success text-primary">Montant</th>
<th scope="col" class="bg-success text-primary">Statut</th>
<th scope="col" class="bg-success text-primary">Actions</th>
 </tr>
</thead>`
    document.querySelector(".active div").classList.remove("bg-success")
    document.querySelector(".active div").classList.add("text-info")
    document.querySelector(".active div").classList.remove("text-white")
    document.querySelector(".active div").classList.add("bg-white")
    document.querySelector("#tableOne").classList.add("d-none")
    document.querySelector(".next div").classList.add("bg-success")
    document.querySelector(".next div").classList.add("active")
    document.querySelector(".next div").classList.add("text-white")
    document.querySelector(".next div").classList.remove("bg-white")
    document.querySelector("#tableTwo").classList.remove("d-none")
    document.querySelector(".prev").classList.remove("disabled")
    document.querySelector(".prev").classList.add("fw-bold")
    document.querySelector(".nexte").classList.add("disabled")
    document.querySelector(".nexte").classList.remove("fw-bold")
    for (let i= 1; i< dateTwo.length; i++) {
        tableTwo.innerHTML += `<table>
        
        <tbody>
        <tr>
            <th scope="row">${dateTwo[i]}</th>
            <td>01/${6+i}/2023</td>
            <td>25.000FCFA</td>
            <td class="text-primary fw-bold"> En attente</td>
            <td><i class="bi bi-eye" data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"></i>
                <i class="bi bi-pencil-square"></i>
            </td>
        </tr>
        
    </tbody>
    </table>
    `
    
    }
    
}
function Prev(){
    tableOne.innerHTML=`
    <thead>
<tr>
<th scope="col" class="bg-success text-primary">Mois</th>
<th scope="col" class="bg-success text-primary">Date</th>
<th scope="col" class="bg-success text-primary">Montant</th>
<th scope="col" class="bg-success text-primary">Statut</th>
<th scope="col" class="bg-success text-primary">Actions</th>
</tr>
</thead>`
    document.querySelector(".active div").classList.add("bg-success")
    document.querySelector(".active div").classList.add("text-white")
    document.querySelector("#tableOne").classList.remove("d-none")
    document.querySelector(".active div").classList.remove("text-info")
    document.querySelector(".active div").classList.remove("bg-white")
    document.querySelector(".next div").classList.remove("bg-success")
    document.querySelector(".next div").classList.remove("text-white")
    document.querySelector("#tableTwo").classList.add("d-none")
    document.querySelector(".next div").classList.add("bg-white")
    document.querySelector(".prev").classList.add("disabled")
    document.querySelector(".nexte").classList.remove("disabled")
    for (let i= 1; i< dateOne.length; i++) {
        tableOne.innerHTML += `<table>
        
        <tbody>
        <tr>
            <th scope="row">${dateOne[i]}</th>
            <td>01/${i}/2023</td>
            <td>25.000FCFA</td>
            <td class="text-primary fw-bold"> En attente</td>
            <td><i class="bi bi-eye" data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"></i>
                <i class="bi bi-pencil-square"></i>
            </td>
        </tr>
        
    </tbody>
    </table>
    `
    
    }
}