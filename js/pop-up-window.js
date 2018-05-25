$(function(){
    $(".btn-ct button").on('click', function() {
        if(!$(".pop-up-window").hasClass("pop-up-window-active")) {
            $(".pop-up-window").addClass("pop-up-window-active");
            // $("html,body").addClass("body-open");
        } else {
            $(".pop-up-window").removeClass("pop-up-window-active");
            // $("html,body").removeClass("body-open");
        }
    });
});
$(function(){
    $(".pop-up-window .pop-up-toggle-ct").on('click', function() {
        $(".pop-up-window").removeClass("pop-up-window-active");
    });
});