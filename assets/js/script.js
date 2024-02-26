$(document).ready(function(){
    let form = document.getElementById("formularioSuperHero");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        limpiarInputs();
    
        let superHeroId = document.querySelector("#superHero-Id").value;
        let resultado = validarId(superHeroId);
    
        if (resultado == true) {
            mostrarSuperHero(superHeroId);
            exito();
        };
    });
    
    function validarId(numero) {
        let pasamosLaValidacion = true;
    
        let validacionNumero = /^[0-9]+$/;
    
        if (validacionNumero.test(numero) == false || numero < 1 || numero > 731) {
            document.querySelector(".errorNumero").innerHTML = "El número que ingresaste no es válido o está fuera del rango solicitado"
            pasamosLaValidacion = false;
        };
    
        return pasamosLaValidacion;
    };

    function limpiarInputs() {
        document.querySelector(".resultado").innerHTML = "";
        document.querySelector(".errorNumero").innerHTML = "";
    }

    function exito() {
        document.querySelector(".resultado").innerHTML = "Hemos encontrado a tu superhéroe!";
    };

    function mostrarSuperHero(id){
        $('#btn-superHero').SuperHero(id)
        $('#btn-superHero').SuperHeroChart(id)
    };
});