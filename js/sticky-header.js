var position = 0;
$( window ).scroll(function() {
    var currentScrollTop = $(window).scrollTop();
    var x = position - currentScrollTop;
    if (x <= currentScrollTop) {
        $(".status, .security, .company, .ecology, .lifestyle").each(function () {
            console.log(currentScrollTop + '#' + $(this).offset().top);
            console.log(currentScrollTop >= $(this).offset().top);
            console.log($(this).offset().top + $(this).height() - $(window).height() / 2 > currentScrollTop);
            console.log(currentScrollTop >= ($(this).offset().top + $(this).height()));
            if (currentScrollTop >= $(this).offset().top) {
                if ($(this).offset().top + $(this).height() - $(window).height() / 2 > currentScrollTop) {
                    $(this).find("h2").addClass("fixed-h2");
                }
                if (currentScrollTop >= ($(this).offset().top + $(this).height())) {
                    $(this).find("h2").removeClass("fixed-h2");
                }
            }
        });
        position = currentScrollTop;
    }
    else if (x > currentScrollTop) {
        $(".status, .security, .company, .ecology, .lifestyle").each(function () {
            $(this).find("h2").removeClass("fixed-h2");
        });
    }

});