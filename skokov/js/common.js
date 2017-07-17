//Bxslider
$(document).ready(function(){
  $('.bxslider').bxSlider({
	  nextSelector: '.next',
	  prevSelector: '.prev',
	  pagerCustom: '.pager',
	  nextText: '',
	  prevText: '',
	});
});

$(document).ready(function(){
  $('.bxslider_bottom').bxSlider({
	 	pager:false,
	 	nextSelector: '.bx_next',
	 	prevSelector: '.bx_prev',
	 	nextText: '',
	  prevText: '',
	});
});

$(document).ready(function(){
                                   
    $('nav a').each(function () {           // получаем все нужные нам ссылки
        var location = window.location.href;  // получаем адрес страницы
        var link = this.href;                 // получаем адрес ссылки
        if(location == link) {                // при совпадении адреса ссылки и адреса окна
        $(this).addClass('active');           //добавляем класс
        }
    });
    
});
