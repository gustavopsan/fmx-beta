const residues = ['Resíduo Autoconer',
                'Inicio Rolo Urdideira',
                'Fio s/ Goma Engomadeira',
                'Fio c/ Goma Engomadeira',
                'Fio c/ Goma Tecelagem',
                'Resíduo Picanol',
                'Residuo Itema',
                'Varreduras'
];

var values = [10.16, 2.6, 17.52, 25.44, 10.0, 75.2, 14.7, 23.6];

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