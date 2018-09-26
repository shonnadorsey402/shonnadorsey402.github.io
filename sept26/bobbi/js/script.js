$(document).ready(function(){
  
  $('#hide-images').click(function(){
    $('img').toggle('slow');
  });
  
  $('#page-recolor').click(function(){
    $('body').css({'background-color':'orange'});
  });
});
