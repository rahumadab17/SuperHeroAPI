jQuery.fn.SuperHero = function(id){
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
};
