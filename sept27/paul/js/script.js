$(document).ready(function(){
  $('#hide-image').click(function(){
    $('img').hide();
  });
  $('#text').click(function(){
    $('p').css({'background-color':'red'});
  });
  $('round-corners').click(function(){
    $('div').css({'border-radius':'100px'});
  });
  
  
  $('div').click(function(){
    $(this).hide();
  });
});
