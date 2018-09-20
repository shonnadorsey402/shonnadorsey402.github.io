$(document).ready(function(){
    $("button").click(function(){
        $("body").toggleClass("fall");
        $("header").toggleClass("text");
        $("nav").toggleClass("navigation");
        $("a").toggleClass("links");
        $("article").toggleClass("content");
    });
});			

