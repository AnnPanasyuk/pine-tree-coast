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

$(function() {
    $("a[data-nesting]").on('click', function() {
        $(this).each(function () {
            var a = $(this).attr("data-nesting");
            $(".level").removeClass("active");
            $(this).closest(".left-ct").find($(".level2-" + a)).addClass("active");
        });
        $(this).closest(".flex-ct").find(".right-ct").addClass("right-ct-transform");
        $(this).closest(".flex-ct").find(".right-ct li").addClass("li-transform");
    });
});