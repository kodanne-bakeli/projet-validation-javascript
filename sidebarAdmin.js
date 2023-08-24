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
