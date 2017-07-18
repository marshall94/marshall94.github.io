//Mobile menu
$(document).ready(function() {
	
  $('.button-menu').click(function() {
    $('.mobaile-menu').slideToggle(500);
  });//end slide toggle

  $(window).resize(function() {		
	if ( $(window).width() > 768 ) {			
		$('.mobaile-menu').removeAttr('style');
		 }
	});//end resize
 });//end ready

//Bxslider
$(document).ready(function(){
  $('.bxslider').bxSlider();
});

//Scroll
  $(document).ready(function() {
    $(".primary-menu a").click(function () {
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 1100 );
      return false;
    });

    $(".mobaile-menu a").click(function () {
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 1100 );
      return false;
    });
  });
