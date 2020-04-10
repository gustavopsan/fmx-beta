$(document).ready(function () {
      
    //Configurando a passagem entre os campos de texto
      $('.app').on('keyup', 'input', (event) => {
          if (event.which === 13) {
              var inputs = $('.form').find('input:visible');
              var index = inputs.index(event.target) + 1;
              var select = $(inputs[index]).focus();
          }

          if (select.length === 0) {
              event.target.focus();
          }
      });


      var user, pass;

      $('#login').click( () => {

        user = $('#username').val();
        pass = $('#password').val();

        $.post("http://127.0.0.1:3000/auth", {username: user, password : pass}, function (data) {

            if (data.status === true) {
                $('#alerta').html('');
                window.location.href = '/home';
            } else if (data.status === false) {
                $('#alerta').html(data.message);
            }

        },
        );

      });
      
});