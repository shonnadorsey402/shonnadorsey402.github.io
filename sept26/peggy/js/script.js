$(document).ready(function(){
  $('#round-corners').click(function(){
    $('div').css({'borders-radius':'10em'});
  });
  
  $('text').click(function() {
    $('p').css({'background-color':'red'});
  });
});

$('image').click(function() {
  $(this).toggle('explode');
});
});
