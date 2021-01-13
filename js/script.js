$(document).ready(function(){

  var turnChevron = $('ul.nav_list li:nth-last-child(2) a');
  console.log(turnChevron);
  $('.nav_list li').hover(function(){
    $(this).toggleClass('t_black');

    //ipotesi più dropdown
    $(this).children('ul').toggleClass('active');
    $(this).children('a').toggleClass('t_black');
    $(this).children('ul li').toggleClass('t_black');

    // con questo if, riusciamo a capovolgere la chevron una volta che ci passiamo sopra, per poi farla tornare alla posizione iniziale una volta che andiamo via dall'hover
    if (turnChevron.hasClass('t_black')){
      $('ul.nav_list li:nth-last-child(2) span i:first-child').addClass('d_none');
      $('ul.nav_list li:nth-last-child(2) span i:last-child').removeClass('d_none');
    } else {
      $('ul.nav_list li:nth-last-child(2) span i:first-child').removeClass('d_none');
      $('ul.nav_list li:nth-last-child(2) span i:last-child').addClass('d_none');
    }

  });


});
