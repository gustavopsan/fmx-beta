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

      
});