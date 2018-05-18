// $(function(){
//     $(".left-ct a").on('click', function(e) {
//         if ($(this).parent().find('ul').length > 0) {
//             e.preventDefault();
//             for(var i = 0; i < 1; i++) {
//                 $(this).attr("data-nesting", i + 1);
//                 if ($(this).attr("data-nesting") == (i + 1)) {
//                     $(".level-2-sales-department").attr("data-nesting", (i + 1));
//                     $(this).parent().find("ul").appendTo(".level-2" + (i + 1));
//                     }
//             }
//             if ($(this).closest(".flex-ct").find(".right-ct").hasClass("right-ct-transform")) {
//                 $(this).closest(".flex-ct").find(".right-ct").removeClass("right-ct-transform");
//             } else {
//                 $(this).closest(".flex-ct").find(".right-ct").addClass("right-ct-transform");
//             }
//             if ($(this).closest(".flex-ct").find(".right-ct li").hasClass("li-transform")) {
//                 $(this).closest(".flex-ct").find(".right-ct li").removeClass("li-transform");
//             } else {
//                 $(this).closest(".flex-ct").find(".right-ct li").addClass("li-transform");
//             }
//             if ($(this).parent().find("ul").hasClass("ul-transform")) {
//                 $(".left-ct ul.ul-transform").removeClass("ul-transform");
//             } else {
//                 $(".left-ct ul.ul-transform").removeClass("ul-transform");
//                 $(this).parent().find("ul").addClass("ul-transform");
//             }
//         }
//     });
// });

$( document ).ready(function() {
    var i = 0;
    $(".left-ct > .back-ct > ul > li > a").each(function () {
        if ($(this).parent("li").find("ul").length > 0) {
            $(this).attr("data-nesting", i + 1);
            var ul_html = $(this).parent("li").find("ul").html();
            var x = "<div" + " " +
                "class='level level2-" +
                (i + 1) + "'" +
                "data-nesting='" +
                (i + 1) + "'" +
                ">" +
                "<ul>" +
                ul_html
                + "</ul>" +
                "</div>";
            $(".left-ct .back-ct > ul").after(x);
            $(this).parent("li").find("ul").remove();
            i++;
        }
    });
});

$(function(){
    $("a[data-nesting]").on('click', function() {
        $(this).each(function () {
            var a = $(this).attr("data-nesting");
            $(".level").removeClass("active");
            $(this).closest(".left-ct").find($(".level2-" + a)).addClass("active");
        });
    });
});