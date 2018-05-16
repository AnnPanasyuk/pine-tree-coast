var position = 0;
function templateChangePoritionTitle() {
    var currentScrollTop = $(window).scrollTop();
    var x = position - currentScrollTop;
    if (x <= 0) {
        $(".status, .security, .company, .ecology, .lifestyle").each(function () {
            if (currentScrollTop >= $(this).offset().top) {
                if ($(this).offset().top + $(this).height() - $(window).height() / 2 > currentScrollTop) {
                    $(this).find("h2").addClass("fixed-h2");
                }
                if (currentScrollTop >= ($(this).offset().top + $(this).height())) {
                    $(this).find("h2").removeClass("fixed-h2");
                    $("header .logo-ct").removeClass("scroll-logo-ct");
                    $("header .logo").removeClass("scroll-logo");
                }
            }
        });
        position = currentScrollTop;
    }
    else if (x > 0) {
        $(".status, .security, .company, .ecology, .lifestyle").each(function () {
            $(this).find("h2").removeClass("fixed-h2");
        });
    }
}

var positionForLogo = 0;

function changePositionLogo() {
    var currentScrollTop = $(window).scrollTop();
    var x = positionForLogo - currentScrollTop;
    if (x <= currentScrollTop) {
        $("header .logo-ct").addClass("scroll-logo-ct");
        $("header .logo").addClass("scroll-logo");
        $("header").addClass("scroll-header");
        // $("header .btn-ct").addClass("scroll-btn-ct");
        $("header .menu-toggle").addClass("scroll-menu-toggle");
        $("header .multilanguage-btns").addClass("scroll-multilanguage-btns");
        $("header .phone").addClass("scroll-phone");
        $("header .communications").addClass("scroll-communications");
        positionForLogo = currentScrollTop;
    } else if (x > currentScrollTop) {
        console.log("ha-ha");
        $("header .logo-ct").removeClass("scroll-logo-ct");
        $("header .logo").removeClass("scroll-logo");
        $("header").removeClass("scroll-header");
        // $("header .btn-ct").removeClass("scroll-btn-ct");
        $("header .menu-toggle").removeClass("scroll-menu-toggle");
        $("header .multilanguage-btns").removeClass("scroll-multilanguage-btns");
        $("header .phone").removeClass("scroll-phone");
        $("header .communications").removeClass("scroll-communications");

    }
}

$( document ).ready(function() {
    templateChangePoritionTitle();
});
$( window ).scroll(function() {
    templateChangePoritionTitle();
    changePositionLogo();
});