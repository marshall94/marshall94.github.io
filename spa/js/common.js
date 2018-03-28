$(document).ready(function(){

  $('.interiorSlider').slick({
    slidesToShow:5,
    slideToScroll:1,
    centerMode:true,
    centerPadding: '60px',
    prevArrow: '<a id="prev" type="button" class="interior-prev"></a>',
    nextArrow: '<a id="next" type="button" class="interior-next"></a>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow:3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow:2
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode:false,
          slidesToShow:1
        }
      },
      {
        breakpoint: 667,
        settings: {
          centerMode:false,
          slidesToShow:1,
          dots:true,
          dotsClass:'interior-dots'
        }
      },
    ]
  });

  $('.reviewsSlider').slick({
     vertical: true,
     prevArrow: '<a id="prev" type="button" class="reviews-prev"></a>',
     nextArrow: '<a id="next" type="button" class="reviews-next"></a>',
     responsive: [
      {
        breakpoint: 667,
        settings: {
          dots:true,
          dotsClass:'reviews-dots'
        }
      }
    ]
  });

  $('.saleSlider').slick({
     dots:true,
     dotsClass:'sale-dots',
     prevArrow: '<a id="prev" type="button" class="sale-prev"></a>',
     nextArrow: '<a id="next" type="button" class="sale-next"></a>',
  });

  $('.salonSlider').slick({
     dots:true,
     dotsClass:'salon-dots',
     prevArrow: '<a id="prev" type="button" class="salon-prev"></a>',
     nextArrow: '<a id="next" type="button" class="salon-next"></a>',
  });

  $('.question').click(function(){
      $(this).next().slideToggle(500);
      $(this).toggleClass('accordion-active');
  });
  
    $('.solon').focus(function(){
    $('.solon-list').slideDown(500);
  });
    $('.solon').blur(function(){
    $('.solon-list').slideUp(500);
  });
});

function initMap() {
        var  LatLng = {lat: 55.976590, lng: 37.168618};  
        var map = new google.maps.Map(document.getElementById('maps'), {
          zoom: 17,
          center:  LatLng
        });
        var marker = new google.maps.Marker({
          position: {lat: 55.975500, lng: 37.168695}, 
          map: map,
          icon: '../img/marker.png'
        });
}






	

