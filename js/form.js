
$(function() {
      $('form').submit(function(e) {
      	popclose.setAttribute('data-dismiss', 'modal');
        popclose.setAttribute('aria-label', 'Close');
        var $form = $(this);
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize()
        }).done(function() {
          console.log('success');
        }).fail(function() {
          console.log('fail');
        });
        //отмена действия по умолчанию для кнопки submit
        e.preventDefault();
        jQuery.noConflict();
        $('#exampleModalCenter').modal('hide');
      });
    });


