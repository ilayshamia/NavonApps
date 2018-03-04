jQuery(document).ready(function(){
  var letterSpacing = parseInt($(".main-content").css("letter-spacing").split("px")[0]);
  var minLetterSpacing = -100;
  var maxLetterSpacing = 80;
  
  var responsive = false;
  
  $(window).bind('mousewheel', function(e){
    var width = window.innerWidth;
    var delta = 0;
    if (width < 800){
      responsive = true;
    } else {
      responsive = false;
    }
    letterSpacing += e.originalEvent.wheelDelta /120;
    if (responsive){
      delta += 65;
    }
    if (letterSpacing > maxLetterSpacing - delta){
      letterSpacing = maxLetterSpacing - delta
    } else if (letterSpacing < minLetterSpacing + delta){
      letterSpacing = minLetterSpacing + delta
    }
    $(".main-content").css("letter-spacing", letterSpacing + "px");
  });
});