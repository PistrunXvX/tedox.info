// $( document ).ready(function() {

// 		$('form').submit(function( event ) {
//   		event.preventDefault();

//   		$.ajax({
//   			type: $(this).attr('method'),
//   			url: $(this).attr('action'),
//   			data: new FormData(this),
//   			success: function(result) {
//   				alert(result)
//   			},
//   		});
// 	});
// });



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
          modalhide.style.zIndex(-1);
        }).fail(function() {
          console.log('fail');
        });
        //отмена действия по умолчанию для кнопки submit
        e.preventDefault();
      });
    });


