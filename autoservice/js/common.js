$(document).ready(function(){
  $('.bxslider').bxSlider({
  	pagerType:'short',
  	nextSelector: '.next',
  	prevSelector: '.prev',
  	nextText: '',
  	prevText: ''
  });
});

$(document).ready(function(){
  $('.revslider').bxSlider({
    pager:false,
    nextSelector: '.next-rev',
    prevSelector: '.prev-rev',
    nextText: '',
    prevText: ''
  });
});

$(document).ready(function(){
  $('.bxsl').bxSlider({
  	controls:false,
  });
});