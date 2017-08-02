$(document).ready(function(){
  $('.bxslider').bxSlider({
  	pager:false,
  	nextSelector:'.next',
 	prevSelector:'.prev',
 	nextText:'',
  	prevText:'',
  	auto:true,
  	speed:1500
  });

});

//Mobile menu
$(document).ready(function() {
	
  $('.button-menu').click(function() {
    $('.rm').slideToggle(500);
  });//end slide toggle

  $(window).resize(function() {		
	if ( $(window).width() > 768 ) {			
		$('.rm').removeAttr('style');
		 }
	});//end resize
 });//end ready