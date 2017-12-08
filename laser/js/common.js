//Mobile menu
$(document).ready(function() {
	
  $('').click(function() {
    $('').slideToggle(500);
  });//end slide toggle

  $(window).resize(function() {		
	if ( $(window).width() > 768 ) {			
		$('.mobaile-menu').removeAttr('style');
		 }
	});//end resize
 });//end ready


//Scroll
  $(document).ready(function() {

    $("").click(function () {
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 1500 );
      return false;
    });

  });


  $(document).ready(function(){
    $('.reviewsSlider').bxSlider({
      pager:false,
      nextSelector: '.reviews-next',
      prevSelector: '.reviews-prev',
      nextText: '',
      prevText: ''
    });

    $('.b-aSlider').bxSlider({
      controls:false,
      pagerCustom: '.before-after-pager'
    });

    $('.offersSlider').bxSlider({
      pager:false,
      nextSelector: '.offers-next',
      prevSelector: '.offers-prev',
      nextText: '',
      prevText: ''
    });

    $('.specialistSlider').bxSlider({
      pager:false,
      nextSelector: '.specialist-next',
      prevSelector: '.specialist-prev',
      nextText: '',
      prevText: ''
    });

    $('.gallerySlider').bxSlider({
      pager:false,
      nextSelector: '.gallery-next',
      prevSelector: '.gallery-prev',
      nextText: '',
      prevText: ''
    });
});

//Accordeon
$(document).ready(function() {
  $('#accordeon .question-answer-item .answer').on('click', f);
});
 
function f(){
  $(this).next().slideToggle(500);
}


//+Class
$(function(){ 
  $('.answer').click(function(e){ 
  e.preventDefault();
  $(this).toggleClass('answer-active'); 
  }); 
});