var position = 0;
$( window ).scroll(function() {
    var currentScrollTop = $(window).scrollTop();
    var x = position - currentScrollTop;
    if (x <= currentScrollTop) {
        $( "header" ).addClass('header-down');
        position = currentScrollTop;
    } else if (x > currentScrollTop) {
        $( "header" ).removeClass('header-down');
    }
    console.log($(window).scrollTop() + '-' + x);
});
