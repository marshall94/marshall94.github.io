

$(document).ready(function(){
  $('.clientsSlider').slick({
    prevArrow: '<button id="prev" type="button" class="clients-prev"></button>',
    nextArrow: '<button id="next" type="button" class="clients-next"></button>'
  });

  $('.worksSlider').slick({
  	slidesToShow:4,
    prevArrow: '<button id="prev" type="button" class="works-prev"></button>',
    nextArrow: '<button id="next" type="button" class="works-next"></button>',
    responsive: [
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 2
      }
    }
  ]
  });

  $('.platformsSlider1').slick({
    prevArrow: '<button id="prev" type="button" class="platforms1-prev"></button>',
    nextArrow: '<button id="next" type="button" class="platforms1-next"></button>'
  });

  $('.platformsSlider2').slick({
    prevArrow: '<button id="prev" type="button" class="platforms2-prev"></button>',
    nextArrow: '<button id="next" type="button" class="platforms2-next"></button>'
  });

  $('.reviewsSlider').slick({
    prevArrow: '<button id="prev" type="button" class="reviews-prev"></button>',
    nextArrow: '<button id="next" type="button" class="reviews-next"></button>'
  });

  $('#fullpage').fullpage({
   scrollOverflow:true,
   responsiveWidth:568,
   responsiveHeight:700
  });
  
});


function menuDown() {
   $('.nav_list').slideToggle(500);
}

function modalApplication(){
  $('.overlay').fadeIn(400, f);
  function f(){
    $('.modal-wrapper').fadeIn(500);
  }
}



$(document).mouseup(function (e) { 
  var popup = $('.modal-application');
  if (popup.has(e.target).length == 0){
    $('.modal-wrapper').fadeOut();
    $('.overlay').fadeOut();
  }
});

$(function() {  
    $(".reviews-txt").niceScroll({cursorcolor:"#d4b080"});
});










