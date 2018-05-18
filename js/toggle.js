$(document).ready(function(){
    $('.toggle-ct').click(function() {
        $(this).find(".toggle").toggleClass('toggle-open');
        $(this).find("#nav-icon3").toggleClass('open');
    });
});
$('.toggle-ct').on('click',function(){
    if($('.menu-navigation').is(":visible")){
        $('.menu-navigation').hide();
    }
    else $('.menu-navigation').show();
});