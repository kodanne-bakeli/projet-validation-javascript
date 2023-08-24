let menuElements = document.querySelectorAll(".sidebar #navi #nav-ul li")

menuElements.forEach(elem => {
	
	elem.addEventListener('click',() =>{
		let largeurEcran = window.innerWidth
		if(largeurEcran > 768){
			// Pour enlever le style
			menuElements.forEach(autresElem =>{
				autresElem.classList.remove('style-nav-elem');
			});

			// Pour ajouter le style
			elem.classList.add('style-nav-elem');
			console.log(largeurEcran)
		}else{
			// window.addEventListener('resize', () =>{
				elem.classList.remove('style-nav-elem')
			// })
			
		}	
	});
});


let start = document.getElementById("start");
let param_icon = document.getElementById("link-animation-start")
let declencheur = document.getElementById("link-animation-start-param")
let stoppeur = document.getElementById("link-animation-stop-param")
let close = document.getElementById("close")
let linkAnim = document.querySelectorAll("#start .link-animation")

stoppeur.style.display = "none";
linkAnim.forEach(elem =>{
	elem.style.display = "none";
})

declencheur.onclick =function(){
	linkAnim.forEach(elem =>{
		elem.style.display = "inline";
		setTimeout(() => {
		    start.classList.add('active')
		    start.classList.remove('desactive')
		 }, 5);
		
	})
	stoppeur.style.display = "inline";
	declencheur.style.display = "none";
}

stoppeur.onclick =function(){
	start.classList.add('desactive')
	start.classList.remove('active')
	linkAnim.forEach(elem =>{
		setTimeout(()=>{
			elem.style.display = "none";
		}, 5)
	})
	stoppeur.style.display = "none";
	declencheur.style.display = "inline";
}

// if(param_icon.innerHTML = '<i class="bi bi-gear"></i>'){
// 	param_icon.onclick = function(){
// 		linkAnim.forEach(elem =>{
// 				elem.style.display = "inline";
// 			})
// 			param_icon.innerHTML = '';
// 			param_icon.innerHTML = '<i class="bi bi-x-lg"></i>';
// 			console.log(param_icon.innerHTML)
// 			console.log("==============")
// 	}
// }
// else if(param_icon.innerHTML == '<i class="bi bi-x-lg"></i>'){
// 	param_icon.onclick = function(){
// 		linkAnim.forEach(elem =>{
// 			elem.style.display = "none";
// 		})
// 		param_icon.innerHTML = '';
// 		param_icon.innerHTML = '<i class="bi bi-gear"></i>';
// 		console.log(param_icon.innerHTML)
// 		console.log("---------------")
// 	}
// }	

// if(param_icon.innerHTML = '<i class="bi bi-x-lg"></i>'){
// 	fermer();
// }

// close.onclick = function(){
// 	start.classList.remove('active')
// }