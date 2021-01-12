$(document).ready(function(){

  $('.drop-menu').hover(function(){
    $(this).children('.dropdown').slideToggle();
    
    $(this).find('i').toggleClass('active')

  });

});