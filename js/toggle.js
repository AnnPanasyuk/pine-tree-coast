$(function(){
    $(document).click(function (e){
        var div = $(".menu-navigation");
        var sandwich = $(".toggle-ct");
        if (div.hasClass("menu-show")) {
            if ( !div.is(e.target) && div.has(e.target).length === 0 && !sandwich.is(e.target) && sandwich.has(e.target).length === 0 ) {
                $(".left-ct").removeClass("left-ct-tr");
                $(".right-ct").removeClass("right-ct-tr");
                $(".center-ct .content").removeClass("content-tr");
                $(".logo-ct .logo").removeClass("logo-tr");
                $(".toggle-ct").removeClass('toggle-ct-tr');
                $(".toggle").removeClass('toggle-open');
                $("#nav-icon3").removeClass('open');
                div.removeClass("menu-show");
            }
        }
    });
});
$(document).ready(function(){
    $('.toggle-ct').click(function() {
        $(this).toggleClass('toggle-ct-tr');
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
    if ($(".logo-ct .logo").hasClass("logo-tr")) {
        $(".logo-ct .logo").removeClass("logo-tr");
    } else {
        $(".logo-ct .logo").addClass("logo-tr");
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
