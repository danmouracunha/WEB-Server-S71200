var atuador_0Data = [1,1,0,1,0,1,0,0,1,1,0,1,0];
var atuador_5Data = [0,0,1,0,1,0,1,1,0,0,1,0,1];
var teste = [];
var valor=0;


var cont = 0
function loaddiv(){
    $("#sensor_6").load(function(){
        $(this).unwrap();
    });
    $("#label_6").text(cont);  
    valor =parseInt($("#label_6").text())
}
$(document).ready(function(){
    loaddiv();
    setInterval(function(){
        loaddiv()
    },1000)
});


$(function () {

    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    // Create the chart
    Highcharts.stockChart('container', {
        chart: {
            events: {
                load: function () {
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = valor;
                        series.addPoint([x, y], true, true);
                    }, 1000);
                }
            }
        },

        rangeSelector: {
            buttons: [{
                count: 1,
                type: 'minute',
                text: '1M'
            }, {
                count: 5,
                type: 'minute',
                text: '5M'
            }, {
                type: 'all',
                text: 'All'
            }],
            inputEnabled: false,
            selected: 0
        },

        title: {
            text: 'Live random data'
        },

        exporting: {
            enabled: false
        },

        series: [{
            name: 'Random data',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -999; i <= 0; i += 1) {
                    data.push([
                        time + i * 1000,
                        0
                    ]);
                }
                return data;
            }())
        }]
    });

});