$(document).ready(function(){
    $('button').click(function(){
      $('body').toggleClass('fall');
      $('header, footer').toggleClass('text');
      $('nav').toggleClass('navigation');
      $('a').toggleClass('links');
      $('article').toggleClass('content');
      $('update').toggleClass('hide');
    });
});
