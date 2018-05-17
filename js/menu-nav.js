$(function(){
    $(".left-ct a").on('click', function(e) {
        if ($(this).parent().find('ul').length > 0) {
            e.preventDefault();
            if ($(this).closest(".flex-ct").find(".right-ct").hasClass("right-ct-transform")) {
                $(this).closest(".flex-ct").find(".right-ct").removeClass("right-ct-transform");
            } else {
                $(this).closest(".flex-ct").find(".right-ct").addClass("right-ct-transform");
            }
            if ($(this).closest(".flex-ct").find(".right-ct li").hasClass("li-transform")) {
                $(this).closest(".flex-ct").find(".right-ct li").removeClass("li-transform");
            } else {
                $(this).closest(".flex-ct").find(".right-ct li").addClass("li-transform");
            }
            if ($(".left-ct ul.ul-transform").hasClass("ul-transform")) {
                $(".left-ct ul.ul-transform").removeClass("ul-transform");
            } else {
                $(this).parent().find("ul").addClass("ul-transform");
            }
        }
    });
});
$(document).ready(function(){
    $('.toggle').click(function(){
        $(this).find("#nav-icon3").toggleClass('open');
    });
});
$('.toggle').on('click',function(){
    if($('.menu-navigation').is(":visible")){
        $('.menu-navigation').hide();
    }
    else $('.menu-navigation').show();
});