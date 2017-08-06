//Mobile menu
$(document).ready(function() {
	
  $('.responsive-button_menu').click(function() {
    $('.nav').slideToggle(500);
  });//end slide toggle

  $(window).resize(function() {		
	if ( $(window).width() > 768 ) {			
		$('.nav').removeAttr('style');
		 }
	});//end resize
 });//end ready