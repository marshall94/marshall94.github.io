$(document).ready(function() {
	
  $('.button-menu').click(function() {
    $('nav ul').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 992 ) {			
			$('nav ul').removeAttr('style');
		 }
	});//end resize
});//end ready


/*--------BXSLIDER-------*/

$(document).ready(function(){
  $('.bxslider').bxSlider({
  	pagerCustom: '.bx-pager',
  	nextSelector: '.slider-next',
  	prevSelector: '.slider-prev',
  	nextText:'',
  	prevText:'',
  });

});



$(document).ready(function(){
                                   
    $('.menu a').each(function () {           // получаем все нужные нам ссылки
        var location = window.location.href;  // получаем адрес страницы
        var link = this.href;                 // получаем адрес ссылки
        if(location == link) {                // при совпадении адреса ссылки и адреса окна
        $(this).addClass('active');           //добавляем класс
        }
    });
    
});




$(window).scroll (function() {
    if($(document).width () > 992) {

    if ($(this).scrollTop() > 90) {
         $('.menu').addClass('fix');
    } else 
         $('.menu').removeClass('fix');
    }

});

