let menuElements = document.querySelectorAll(".sidebar #navi #nav-ul li")

menuElements.forEach(elem => {
	elem.addEventListener('click',() =>{
		// Pour enlever le style
		menuElements.forEach(autresElem =>{
			autresElem.classList.remove('style-nav-elem');
		});

		// Pour ajouter le style
		elem.classList.add('style-nav-elem');
	});
});

// ===========DROPDOWN PERSONNALISE===============
let closeModalBtn = document.getElementById('closeModalBtn')
let myModal = document.getElementById('myModal')
let btnModal = document.getElementById('header-btn-down')

btnModal.addEventListener('click', function(){
	myModal.style.display = "block";
})

closeModalBtn.addEventListener('click', function(){
	myModal.style.display = "none";
})

window.addEventListener('click', function(event){
	let displayDropDown = document.getElementsByClassName('unNomDeClasseSpecial')[0]
	if (
		event.target.parentElement.parentElement === displayDropDown 
		&& 
		myModal.style.display === "block"
	) {
		myModal.style.display = "none"
	}
})
// =============================================