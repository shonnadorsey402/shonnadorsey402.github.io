$(document).ready(function(){
    $("body").css({"background": "#6B0200", "color", "#fff"});
    $("button").click(function(){
        $("body").toggleClass("fall");
        $("header, footer").toggleClass("text");
        $("nav").toggleClass("navigation");
        $("a").toggleClass("links");
        $("article").toggleClass("content");
        $("#update").toggleClass("hide");
    });
});			

