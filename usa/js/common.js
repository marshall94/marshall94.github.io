
// SCROLL SHOW
$(window).scroll(function(){
  if($(window).scrollTop() > $('.nav-box').height() + 10 ){
    $('.nav-box').addClass('fixed');
  }else{
    $('.nav-box').removeClass('fixed');
  }
});

function scrollShow(id){
  var offset = $('.nav-box').height() + $('.nav-box').height();
  $('html, body').animate({
    scrollTop: $(id).offset().top - offset
  }, 1500);
}
// VIDEO START 
$('#js-play_1').click(function(){  
  $('.video-box_1').fadeIn();
  $('.video-pc').trigger('play');
  $('#js-play_1').fadeOut();
});

$('#js-play_2').click(function(){  
  $('.video-box_2').fadeIn();
  $('.video-phone').trigger('play');
  $('#js-play_2').fadeOut();
});

// // VIDEO STOP
 $('#js-video_stop__1').click(function(){
    $('.video-pc').trigger('pause');
    $('#js-play_1').fadeIn();
 });

 $('#js-video_stop__2').click(function(){
    $('.video-phone').trigger('pause');
    $('#js-play_2').fadeIn();
 });
// MENU SHOW
$('.btn-menu').click(function(){
  $('.nav').slideToggle(500);
});

$(window).resize(function(){
  if($(window).width() > 768 ){
    $('.nav').removeAttr('style');
  }
});

 // ACCORDION

 $('.question').on('click', function(){
  $(this).next().slideToggle(500);
  $(this).toggleClass('accordion_active');
});

