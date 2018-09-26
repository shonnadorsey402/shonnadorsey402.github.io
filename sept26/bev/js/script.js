$(document).ready(function(){
$('#round-corners').click(function(){
  $('div').css({'border-radius':'10em'});
});
$('#text').click(function(){
  $('#custom-paragraph').css({'background-color':'blue'});
});
$('img').click(function() {
  $(this).toggle('explode');
});
});
