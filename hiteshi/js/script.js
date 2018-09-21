$(document).ready(function(){
    $('button').click(function(){
       $('body').toggleClass('fall');
       $('header, footer').toggleClass('text');
       $('nav').toggleclass('navigation');
       $('a').toggleclass('links');
       $('article').toggleClass('content');
       $('#update').toggleclass('hide');
   });
      });
