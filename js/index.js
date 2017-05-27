/*********************Document Ready*********************/
$().ready(function(){
    $('.menu-button').on('click', menuButtonEvent);
    $('.menu').on('click', menuButtonEvent);
    $('a[href*="#"]:not([href="#"])').on('click', linkScroll);
});

/*********************MenuButtonEvent*********************/
function menuButtonEvent(){
    var state = $('.menu').css('display');
    console.log(state);
    if( state === 'none'){
        $('.menu').slideDown('slow');
    }else{
        $('.menu').slideUp('slow');
    }
}

/*********************LinkScroll*********************/
function linkScroll(){
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1200);
      return false;
    }
  }
}
