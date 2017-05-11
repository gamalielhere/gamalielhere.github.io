$(document).ready(function(){
  $('.slick-container').slick({
    arrows: false,
    speed: 300,
    slidesToShow: 1
  });

  $(".button-collapse").sideNav({
    menuWidth: 200, // Default is 300
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true
  });
});
