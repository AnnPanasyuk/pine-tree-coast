$(function(){
    $(".btn-ct button").on('click', function() {
        if(!$(".pop-up-window").hasClass("pop-up-window-active")) {
            $(".pop-up-window").addClass("pop-up-window-active");
            $("body").addClass("body-scroll");
            $(".pop-up-window").bind('mousewheel DOMMouseScroll', function(e) {
                var scrollTo = null;
                if (e.type == 'mousewheel') {
                    scrollTo = (e.originalEvent.wheelDelta * -1);
                }
                else if (e.type == 'DOMMouseScroll') {
                    scrollTo = 40 * e.originalEvent.detail;
                }
                if (scrollTo) {
                    e.preventDefault();
                    $(this).scrollTop(scrollTo + $(this).scrollTop());
                }
            });
        }
    });
});

$(function(){
    $(".pop-up-window .pop-up-toggle-ct").on('click', function() {
        $(".pop-up-window").removeClass("pop-up-window-active");
        $("body").removeClass("body-scroll");
    });
});

$(function() {
   $(".pop-up-window-back").click(function(e) {
       $(".pop-up-window").removeClass("pop-up-window-active");
   });
});

$(function() {
    $("form button[type=submit]").click(function(e) {
        $(".pop-up-window").removeClass("pop-up-window-active");
    });
});
