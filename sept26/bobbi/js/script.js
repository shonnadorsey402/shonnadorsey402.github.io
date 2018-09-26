$(document).ready(function(){
  
  $('#hide-images').click(function(){
    $('img').toggle();
  });
  
  $('#page-recolor').click(function(){
    $('body').css({'background-color':'orange'});
  });
});
