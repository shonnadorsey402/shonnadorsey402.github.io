$(document).ready(function(){
    $("button").click(function(){
        $("body").toggleClass("fall");
        $("header, footer").toggleClass("text");
        $("nav").toggleClass("navigation");
        $("a").toggleClass("links");
        $("article").toggleClass("content");
        $("#update").toggleClass(function(){
            $("#update").text("Click the button below to return to the default layout!");
        });
    });
});			

