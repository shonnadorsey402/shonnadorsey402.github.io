$(document).ready(function(){
  $('#btn1').click(function(){
    $('img').hide()
    });

  $('img').click(function(){
    $(this).toggle('explode');
  });
});
