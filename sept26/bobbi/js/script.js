$(document).ready(function(){
  $('#round-corners').click(function(){
    $('div').css({'border-radius':'10em'});
  });
  
  $('#text').click(function(){
    $('#custom-paragraph').css({'background-color':'magenta'});
  });
  
  $(document).click(function() {
   $(this).toggle('explode');
  });
});
