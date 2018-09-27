$('.slider').slick({
	slidesToShow:3,
	prevArrow: '<button id="prev" type="button" class="slider-prev"><img src="assets_back_end/img/slider/arrow.png"></button>',
 	nextArrow: '<button id="next" type="button" class="slider-next"><img src="assets_back_end/img/slider/arrow.png"></button>',
 	responsive: [
    {
      breakpoint: 992,
      settings: {
       slidesToShow:2
      }
    },
    {
      breakpoint: 768,
      settings: {
       slidesToShow:1
      }
    },
  ]
});


$('.btnMenu').click(function(){
	$('.menu_open').fadeIn(500);
});
$('.close').click(function(){
	$('.menu_open').fadeOut(500);
});



	$('.play_1').click(function(){
		$('.poster_1').fadeOut(500);
	});
	$('.play_2').click(function(){
		$('.poster_2').fadeOut(500);
	});

	$('.play_3').click(function(){
		$('.poster_3').fadeOut(500);
	});

	$('.play_4').click(function(){
		$('.poster_4').fadeOut(500);
	});

	$('.play_5').click(function(){
		$('.poster_5').fadeOut(500);
	});


$('.callBack__step1').on('click', function(){
	$(this).css('display', 'none');
	$('.callBack__step2').css('display', 'flex');
});

$('.callBack__step2_close').on('click', function(){
	$('.callBack__step2').css('display', 'none');
	$('.callBack__step1').css('display', 'block');
});

$(window).scroll(function(){
	if(	$(this).scrollTop() > 300)	{
		$('.callBack').css('opacity', '1.0');
	}
	else{
		$('.callBack').css('opacity', '0.0');
	}
});

function modalApplication(){
	$('.overlay').fadeIn(500);
	$('.wrp_modal').fadeIn(700);
}

$('.modal__close, .modal-close').on('click', function(){
	$('.overlay').fadeOut(500);
	$('.wrp_modal').fadeOut(700);
	$('.wrp-press').fadeOut(700);
});



$(window).scroll(function(){
  if($(this).scrollTop() > 150){
    $('.header__top').addClass('fixed')
  }else{
    $('.header__top').removeClass('fixed')
  }
});

$(".contactBox__map_item").not(':first').hide();
$(".mapNav__link").click(function() {
  $(".mapNav__link").removeClass("mapNav__active").eq($(this).index()).addClass("mapNav__active");
  $(".contactBox__map_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("mapNav__active");

function slowScroll(id){
  var offset = 200;
  $('html, body').animate({
    scrollTop: $(id).offset().top - offset
  }, 1000);
  return false;
}
function press(id){
	$('.overlay').fadeIn(500);
	$(id).fadeIn(500);
}

$('.nav__item_link').on('click', function(){
	$('.menu_open').fadeOut(500);
});