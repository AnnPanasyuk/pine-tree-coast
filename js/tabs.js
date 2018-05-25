$(function(){
    $(".tabs-ct .caption").on('click', function() {
        if ( !$(this).hasClass("active") ) {
            $(".tabs-ct .caption.active").removeClass("active");
            $(this).addClass("active");
            $(".content .body").eq($(this).index() -1 ).slideUp("slow");
            $(".content .body").eq($(this).index()).slideDown("slow");
        }
    });
});