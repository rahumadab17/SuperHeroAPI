jQuery.fn.SuperHeroChart = function(id){
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
            if (error){
                alert("Hubo un error al intentar crear el gráfico, porfavor actualiza la página")
            }
            console.log(error)
        }
    });
};
