$('.caseSlider').slick({
  slidesToShow:4,
  centerMode:true,
  prevArrow: '<button id="prev" type="button" class="case-prev"></button>',
  nextArrow: '<button id="next" type="button" class="case-next"></button>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow:2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
      	centerMode:false,
        slidesToShow:1,
        slidesToScroll: 1,
      }
    }
  ]
});
$('.customersSlider').slick({
	dots:true,
	dotsClass:'customers-dots',
	prevArrow: '<button id="prev" type="button" class="customers-prev"></button>',
 	nextArrow: '<button id="next" type="button" class="customers-next"></button>'
});
$('.advantagesSlider').slick({
	dots:true,
	dotsClass:'advantages-dots',
	prevArrow: '<button id="prev" type="button" class="advantages-prev"></button>',
 	nextArrow: '<button id="next" type="button" class="advantages-next"></button>'
});

$('.question').click(function(){
	$(this).next().slideToggle(500);
	$(this).toggleClass('answer-active')
})




