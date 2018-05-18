$(document).ready(function(){
    $('.toggle-ct').click(function() {
        $(this).find(".toggle").toggleClass('toggle-open');
        $(this).find("#nav-icon3").toggleClass('open');
    });
});
$('.toggle-ct').on('click',function(){
    if ($(".left-ct").hasClass("left-ct-tr")) {
        $(".left-ct").removeClass("left-ct-tr");
    } else {
        $(".left-ct").addClass("left-ct-tr");
    }
    if ($(".right-ct").hasClass("right-ct-tr")) {
        $(".right-ct").removeClass("right-ct-tr");
    } else {
        $(".right-ct").addClass("right-ct-tr");
    }
    if ($(".center-ct .content").hasClass("content-tr")) {
        $(".center-ct .content").removeClass("content-tr");
    } else {
        $(".center-ct .content").addClass("content-tr");
    }
    if($('.menu-navigation').hasClass("menu-show")) {
        $('.menu-navigation').removeClass("menu-show");
    }
    else {
        $('.menu-navigation').addClass("menu-show");
        $(".level").removeClass("active");
        $(".right-ct").removeClass("right-ct-transform");
        $(".right-ct li").removeClass("li-transform");
    }
});