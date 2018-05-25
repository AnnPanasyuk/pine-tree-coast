var div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

div.style.visibility = 'hidden';

document.body.appendChild(div);
var scrollWidth = div.offsetWidth - div.clientWidth;
document.body.removeChild(div);

console.log( scrollWidth );

$(function(){
    $(".btn-ct button").on('click', function() {
        if(!$(".pop-up-window").hasClass("pop-up-window-active")) {
            $(".pop-up-window").addClass("pop-up-window-active");
            $("html,body").addClass("body-open");
            $(".body-open").css("padding-right", scrollWidth);
            console.log("dshdfh: " + scrollWidth);
        }
    });
});
$(function(){
    $(".pop-up-window .pop-up-toggle-ct").on('click', function() {
        $(".pop-up-window").removeClass("pop-up-window-active");
        $("html,body").removeClass("body-open");
        $("html,body").css("padding-right", 0);
    });
});
