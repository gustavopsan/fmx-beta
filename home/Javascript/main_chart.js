const residues = ['Resíduo Autoconer',
                'Inicio Rolo Urdideira',
                'Fio s/ Goma Engomadeira',
                'Fio c/ Goma Engomadeira',
                'Fio c/ Goma Tecelagem',
                'Resíduo Picanol',
                'Residuo Itema',
                'Varreduras'
];

var values = [1, 1, 1, 1, 1, 1, 1, 1];

var ctx = $('.main_chart');

var graphic = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: residues,
      datasets: [{
        label: 'Peso (Kg)',
        data: values,
        backgroundColor: '#394472',
      }]
    }
});

function updateChart(chart, data) {
	chart.data.datasets[0].data = data;
	chart.update();
	console.log('Chart Updated Sucessfuly');
};

$('#btn_go').click( function () {
	
	var date = $('#date').val();

	$.get( `https://api-fmx.herokuapp.com/fm_xxx/${date}`, function( data ) {

        $('#doc_num').val(data.data.id_form)
        $('#autoconer').html(data.data.autoconer);
        $('#urdideira').html(data.data.urdideira);
        $('#fsg_eng').html(data.data.fsg_eng);
        $('#fcg_eng').html(data.data.fcg_eng);
        $('#fcg_tec').html(data.data.fcg_tecelagem);
        $('#picanol').html(data.data.res_picanol);
        $('#itema').html(data.data.res_itema);
		$('#varredura').html(data.data.varreduras);
		
		var data1 = data.data.autoconer;
		var data2 = data.data.urdideira;
		var data3 = data.data.fsg_eng;
		var data4 = data.data.fcg_eng;
		var data5 = data.data.fcg_tecelagem;
		var data6 = data.data.res_picanol;
		var data7 = data.data.res_itema;
		var data8 = data.data.varreduras;

		var newData = [data1, data2, data3, data4, data5, data6, data7, data8];

		updateChart(graphic, newData);

    }).fail( function (err) {
        console.log(err);
        });
})