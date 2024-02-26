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
                    $('#nombreSuperHero').text(`Nombre: ${data.name}`);
                    $('#conexionesSuperHero').html(`Conexiones: ${data.connections['group-affiliation']}`);
                    $('#publicadoSuperHero').html(`<i>Publicado por</i>: ${data.biography.publisher}`);
                    $('#ocupacionSuperHero').html(`<i>Ocupación</i>: ${data.work.occupation}`);
                    $('#aparicionSuperHero').html(`<i>Primera Aparición</i>: ${data.biography['first-appearance']}`);
                    $('#alturaSuperHero').html(`<i>Altura</i>: ${data.appearance.height}`);
                    $('#pesoSuperHero').html(`<i>Peso</i>: ${data.appearance.weight}`);
                    $('#alianzasSuperHero').html(`<i>Alianzas</i>: ${data.biography.aliases}`);
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
            },
            error: function(error){
                console.log(error)
            }
        });
    };
});