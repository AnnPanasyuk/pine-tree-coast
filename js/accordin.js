$(function(){
    $(".accordion-ct > .caption").on('click', function() {
        if($(this).parent().find(".drop-down-body").hasClass("drop-down-body-active")) {
            $(this).parent().find(".drop-down-body").removeClass("drop-down-body-active");
        } else {
            $(this).parent().find(".drop-down-body").addClass("drop-down-body-active");
        }
    });
});