$(document).ready(function(){
  $('.slider').slider({
    height: $('.projects-container').height(),
    indicators: false,
    interval: 5000
  });

  $(".button-collapse").sideNav({
    menuWidth: 200, // Default is 300
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true
  });
});
