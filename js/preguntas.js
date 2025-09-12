let botones = document.querySelectorAll(".botondeApertura");

botones.forEach(boton => {
    boton.addEventListener("click", function(){
        let desplegable = this.nextElementSibling;
        desplegable.classList.toggle("activo");
    });
});
//complemento