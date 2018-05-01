$(document).ready(function(){
    $(".btn").click(function(){
        $("ul").slideToggle(500);
    });
});

 $(window).resize(function(){
    if(window.innerWidth > 700) {
        $("ul").removeAttr("style");
    }
});

function myFunction(x) {
    x.classList.toggle("change");
}

