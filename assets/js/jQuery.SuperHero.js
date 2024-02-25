jQuery.fn.SuperHero = function(id){
    $.ajax({
        type:"GET",
        url: `https://superhero.arielhernandezcl.workers.dev/${id}`,
        dataType:"json",
        success: function(data){
                $('#img-superhero').text(`<img src=${data.image.url}>`);
                $('#nombreSuperHero').text(`Nombre: ${data.name}`);
                $('#conexionesSuperHero').text(`Conexiones: ${data.connections.group-affiliation}`);
                $('#publicadoSuperHero').text(`<i>Publicado por</i>: ${data.biography.publisher}`);
                $('#ocupacionSuperHero').text(`<i>Ocupación</i>: ${data.work.occupation}`);
                $('#aparicionSuperHero').text(`<i>Primera Aparición</i>: ${data.biography.first-appearance}`);
                $('#alturaSuperHero').text(`<i>Altura</i>: ${data.appearance.height}`);
                $('#pesoSuperHero').text(`<i>Peso</i>: ${data.appearance.weight}`);
                $('#alianzasSuperHero').text(`<i>Alianzas</i>: ${data.biography.aliases}`);
        },
        error: function(error){
            console.log(error);
        }
    });
};


/*     function superheroe(id) {
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
        }); */