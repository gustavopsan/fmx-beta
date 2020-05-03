function charge () {
    $.get("https://api-fmx.herokuapp.com/check", function (data) {
        if (data.status === false) {
            //window.location.href = '../';
            alert(data.status);
        } else if (data.status === true) {
            alert(data.status);
            $.get("https://api-fmx.herokuapp.com/getUser", function (data) {
                $('#user').val(data.username);
            })
        }
    });
}

window.addEventListener('load', charge, false);

$(document).ready(function () {
      
    //Configurando a passagem entre os campos de texto
    $('.form').on('keyup', 'input', (event) => {
        if (event.which === 13) {
            var inputs = $('.form').find('input:visible');
            var index = inputs.index(event.target) + 1;
            var select = $(inputs[index]).focus();
        }

        if (select.length === 0) {
            event.target.focus();
        }
    });

    $('#btn_check').click( () => {
        var date = ($('#date').val());

        $.get(`https://api-fmx.herokuapp.com/fm_xxx/${date}`, function(data) {
            if (data.data === undefined) {
                $('#alerta_check').attr('class', 'badge badge-pill badge-primary');
                $('#alerta_check').html('Sem formulários para este dia!');
            } else {
                $('#alerta_check').attr('class', 'badge badge-pill badge-danger');
                $('#alerta_check').html('Já existe formulário para este dia!');
            }
        })
    })

    $('#enviar').click( () => {

        var ourela_itema = $('#ourela_itema').val();
        var fsg_itema = $('#fsg_itema').val();
        var ourela_picanol = $('#ourela_picanol').val();
        var fsg_picanol = $('#fsg_picanol').val();
        var fcg_picanol = $('#fcg_picanol').val();
        var fcg_itema = $('#fcg_itema').val();

        var fcg_tecelagem = parseFloat(fcg_itema) + parseFloat(fcg_picanol);
        var res_picanol = parseFloat(ourela_picanol) + parseFloat(fsg_picanol);
        var res_itema = parseFloat(ourela_itema) + parseFloat(fsg_itema);

        var date = $('#date').val();
        var res1 = $('#autoconer').val();
        var res2 = $('#urdideira').val();
        var res3 = $('#fsg_eng').val();
        var res4 = $('#fcg_eng').val();
        var res5 = fcg_tecelagem.toFixed(3);
        var res6 = res_picanol.toFixed(3);
        var res7 = res_itema.toFixed(3);
        var res8 = $('#varreduras').val();
        
        $.post('https://api-fmx.herokuapp.com/new', {data: date, res1: res1, res2: res2, res3: res3, res4: res4, res5: res5, res6: res6, res7: res7, res8: res8}, (data) => {

            if (data.status === true) { 
                $('#alerta').html(data.message);
            } else if (data.status === false) {
                $('#alerta').html(data.message);
            }

        })
    });
});