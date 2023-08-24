const file = document.querySelector('#file');
const uploadButton = document.querySelector('#uploadButton');
let img = document.querySelector('#photo')

file.addEventListener('change' , function(){
    let chosedFile = this.files[0];
    if(chosedFile){
        const reader = new FileReader();

        reader.addEventListener('load' , function(){
            img.setAttribute('src' , reader.result);
        })

        reader.readAsDataURL(chosedFile);
    }
})