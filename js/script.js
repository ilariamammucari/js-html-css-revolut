$(document).ready(function(){

  $('.drop-menu').hover(function(){
    $(this).children('.dropdown').slideToggle();
    
    
    if ( $('.drop-menu').index() == 4 ){
      $('i').eq(0).toggleClass('active');
      $('i').eq(1).toggleClass('active');
    }
  });

});