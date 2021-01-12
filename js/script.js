$(document).ready(function(){

  $('.nav_list li').hover(function(){
    // $('.dropdown-menu').toggleClass('active');

    //ipotesi più dropdown
    $(this).children('ul').toggleClass('active');
  });


});
