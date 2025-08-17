$(document).ready(function(){
  $(".circle-circles img").hover(
    function(){
      $(this).css("transform", "scale(1.1)");
    },
    function(){
      $(this).css("transform", "scale(1)");
    }
  );
});
