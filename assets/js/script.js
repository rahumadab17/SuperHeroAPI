$(document).ready(function(){
    let form = document.getElementById("formularioSuperHero");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        limpiar();
    
        let superHeroId = document.querySelector("#superHero-Id").value;
        let resultado = validar(superHeroId);
    
        if (resultado == true) {
            superHero(superHeroId);
            exito();
        };
    });

    function limpiar() {
        document.querySelector(".resultado").innerHTML = "";
        document.querySelector(".errorNumero").innerHTML = "";
    }

    function exito() {
        document.querySelector(".resultado").innerHTML = "Hemos encontrado a tu superhéroe!";
    };

    function validar(numero) {
        let pasamosLaValidacion = true;
    
        let validacionNumero = /^[0-9]+$/;
    
        if (validacionNumero.test(numero) == false || numero <1 || numero > 731) {
            document.querySelector(".errorNumero").innerHTML = "El número que ingresaste no es válido o está fuera del rango solicitado"
            pasamosLaValidacion = false;
        };
    
        return pasamosLaValidacion;
    };

    function superHero(id){
        $.ajax({
            type:"GET",
            url: `https://superhero.arielhernandezcl.workers.dev/${id}`,
            dataType:"json",
            success: function(data){
                    $('#noshow').show();
                    $('#img-superhero').attr('src', data.image.url);
                    $('#nombreSuperHero').text(`${data.name}`);
                    $('#conexionesSuperHero').text(`${data.connections['group-affiliation']}`);
                    $('#publicadoSuperHero').insertAfter(`${data.biography.publisher}`);
                    $('#ocupacionSuperHero').text(`${data.work.occupation}`);
                    $('#aparicionSuperHero').text(`${data.biography['first-appearance']}`);
                    $('#alturaSuperHero').text(`${data.appearance.height}`);
                    $('#pesoSuperHero').text(`${data.appearance.weight}`);
                    $('#alianzasSuperHero').text(`${data.biography.aliases}`);
            },
            error: function(error){
                console.log(error);
            }
        });

        $.ajax({
            type:"GET",
            url: `https://superhero.arielhernandezcl.workers.dev/${id}`,
            dataType:"json",
            success: function(data){
                    var options = {
                        title: {
                            text: `Estadísticas de Poder para ${data.name}`
                        },
                        animationEnabled: true,
                        data: [{
                            type: "pie",
                            startAngle: 40,
                            toolTipContent: "<b>{label}</b>: {y}",
                            showInLegend: "true",
                            legendText: "{label}",
                            indexLabelFontSize: 16,
                            indexLabel: "{label} {y}",
                            dataPoints: [
                                { y: `${data.powerstats.intelligence}`, label: "Intelligence" },
                                { y: `${data.powerstats.strength}`, label: "Strength" },
                                { y: `${data.powerstats.speed}`, label: "Speed" },
                                { y: `${data.powerstats.durability}`, label: "Durability" },
                                { y: `${data.powerstats.power}`, label: "Power" },
                                { y: `${data.powerstats.combat}`, label: "Combat" }
                            ]
                        }]
                    };
                    $("#chartContainer").CanvasJSChart(options);
            }
        });
    };

/*     window.onload = function () {
        var options = {
            title: {
                text: `Estadísticas de Poder para ${data.name}`
            },
            animationEnabled: true,
            data: [{
                type: "pie",
                startAngle: 40,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                dataPoints: [
                    { y: `${data.powerstats.intelligence}`, label: "Intelligence" },
                    { y: `${data.powerstats.strength}`, label: "Strength" },
                    { y: `${data.powerstats.speed}`, label: "Speed" },
                    { y: `${data.powerstats.durability}`, label: "Durability" },
                    { y: `${data.powerstats.power}`, label: "Power" },
                    { y: `${data.powerstats.combat}`, label: "Combat" }
                ]
            }]
        };
        $("#chartContainer").CanvasJSChart(options);
        }; */


});



/* function superheroe(id) {
    var urlApi = `https://superhero.arielhernandezcl.workers.dev/${id}`;
    $.ajax({
        type: "GET",
        url: urlApi,
        dataType: "json",
        success: function (datosApi) {
            console.log(datosApi);
            //como es un objeto no es necesario usar el forEach (no es array)
            // 
            $('.ordenandoCard').show();
            $('.card-title').text(`Nombre: ${datosApi.name}`)
        },
        error: function(error){
            console.log(error)
        }
    });
}; */








/*     success: function(data){
        data.each(datos => {
            element.append(`Nombre: ${datos.name}, Conexiones: ${datos.connections}, <i>Publicado por</i>: ${datos.biography.publisher}, <i>Ocupación</i>: ${datos.work.occupation}, <i>Primera Aparición</i>: ${datos.biography.first-appearance}, <i>Altura</i>: ${datos.appearance.height}, <i>Peso</i>: ${datos.appearance.weight}, <i>Alianzas</i>: ${datos.biography.aliases}`) */

    /* $('#btn-superHero').SuperHeroName();
        
    $('#img-superhero').append(`<img src=${datos.image.url}>`);
    $('#nombreSuperHero').append(`Nombre: ${datos.name}`);
    $('#conexionesSuperHero').append(`Conexiones: ${datos.connections}`);
    $('#publicadoSuperHero').append(`<i>Publicado por</i>: ${datos.biography.publisher}`);
    $('#ocupacionSuperHero').append(`<i>Ocupación</i>: ${datos.work.occupation}`);
    $('#aparicionSuperHero').append(`<i>Primera Aparición</i>: ${datos.biography.first-appearance}`);
    $('#alturaSuperHero').append(`<i>Altura</i>: ${datos.appearance.height}`);
    $('#pesoSuperHero').append(`<i>Peso</i>: ${datos.appearance.weight}`);
    $('#alianzasSuperHero').append(`<i>Alianzas</i>: ${datos.biography.aliases}`); */

/* function validar (superHeroId){
    let pasamosLaValidacion = true;
    let validacionId = /^[0-9]+$/;

    if(validacionId.test(superHeroId) == false){
        document.querySelector(".errorNumero").innerHTML="Debes ingresar un número del 1 al 731, sin letras ni símbolos."
        pasamosLaValidacion = false
    } else {
        return pasamosLaValidacion;
    };
}; */