$(document).ready(function () {
    
    function Coleta(date, id_form, autoconer, urdideira, fsg_eng, fcg_eng, fcg_tecelagem, res_picanol, res_itema, varreduras) {
            this.date = date;
            this.id_form = id_form;
            this.autoconer = autoconer,
            this.urdideira = urdideira,
            this.fsg_eng = fsg_eng,
            this.fcg_eng = fcg_eng,
            this.fcg_tecelagem = fcg_tecelagem,
            this.res_picanol = res_picanol,
            this.res_itema = res_itema,
            this.varreduras = varreduras
        }

    var coleta1 = new Coleta('2020-03-26',001 ,7.85, 2.13, 25.84, 49.60, 18.42, 124.62, 30.20, 23.40);

    $('#btn_go').click(function () {

        var date = $('#date').val();

        if (coleta1.date == date) {
            console.log(coleta1);   
        } else {
            console.log('Form not found');
        }
    });

});