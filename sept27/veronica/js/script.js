$(document).ready(function(){
  $('#btn1').click(function(){
    $('img').hide()
    });

  $('img').click(function(){
    $(this).toggle('explode');
  });
  
  $('body').click(function(){
    $('body').css({'background-color' : 'black'});
  });
});
