$(document).ready(function(){
$('#hide-image').click(function(){
  $('img').hide();
});
  $('#test').click(function(){
    $('p').css({'background-color':'blue'});
  });
  $('#round-corners').click(function(){
    $('div').css({'border-radius':'100px'});
  });
  
  $('div').click(function(){
    $(this).hide();
  });
});
