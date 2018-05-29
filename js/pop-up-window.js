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
   $(".pop-up-window").click(function(e) {
       var pop_up_ct = $(".pop-up-ct");
       var pop_up_sandwich = $(".pop-up-toggle-ct");
       if($(".pop-up-window").hasClass("pop-up-window-active")) {
           if ( !pop_up_ct.is(e.target) && pop_up_ct.has(e.target).length === 0 && !pop_up_sandwich.is(e.target) && pop_up_sandwich.has(e.target).length === 0 ) {
               // $(".pop-up-window").addClass("pop-up-window-close");
               $(".pop-up-window").removeClass("pop-up-window-active");
           }
       }
   });
});
