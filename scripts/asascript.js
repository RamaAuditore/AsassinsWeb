//let imagen = document.querySelectorAll(".animada");

//function mostrarScroll(){
 let scrollTop = document.documentElement.scrollTop;
 for(let i=0; i < imagen.length; i++ ){
    let alturaAnimado = imagen[i].offsetTop;
    if(alturaAnimado - 540 < scrollTop){
        imagen[i].style.opacity = 1;
        imagen[i].classList.add("mostrarArriba")
    }
 }
}

//window.addEventListener('scroll', mostrarScroll);



