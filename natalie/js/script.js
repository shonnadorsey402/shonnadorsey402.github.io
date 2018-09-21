$(document).ready(function(){
  $("button").click(function(){
    $("body").toggleClass("fall");
    $("header, footer").toggleClass("text");
    $("nav").toggleClass("navigations");
    $("a").toggleClass("links");
    $("article").toggleClass("content");
    $("#update").toggleClass("hide");
  });
});
  
  
