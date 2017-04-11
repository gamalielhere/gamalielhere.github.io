$(document).ready(function(){
  $('.slider').slider({
    height: $(window).height(),
    indicators: false,
    interval: 5000
  });

  $('.project-slider').slick({
    arrows: true,
    slidesToShow: 2
  });
});
