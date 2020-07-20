(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


$(".dropdown-trigger").dropdown();




// ==============================
// Carousel with featured classes.
$(document).ready(function(){
  $('.carousel').carousel();
});

//
$('.fixed-action-btn').openFAB();
$('.fixed-action-btn').closeFAB();
