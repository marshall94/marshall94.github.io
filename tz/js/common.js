function optionDown(){
  $('.option-list').slideToggle(500);
}
function getText(str){
  document.getElementById('search').value = str.firstChild.data;
  $('.option-list').slideToggle(500);
}

$('.accordion-top').click(function(){
  $(this).next().slideToggle(500);
  $('.accordion-btn').toggleClass('active');
});

$('.courseSlider').slick({
  slidesToShow:4,
  prevArrow: '<button id="prev" type="button" class="course-prev"><img src="../img/arrow.png" alt=""></button>',
  nextArrow: '<button id="next" type="button" class="course-next"><img src="../img/arrow.png" alt=""></button>',
  responsive: [
    {
      breakpoint:992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint:560,
      settings: {
        slidesToShow:1
      }
    }
  ]
});
