$(".news-btn").on('click', function() {
    $.ajax({
        method: 'POST',
        url: './news.php',
        data: {
            action: 'load',
            current: $(".new-ct").length
        },
        success: function(data) {
            var img = JSON.parse(data).body.img;
            var title = JSON.parse(data).body.title;
            var des = JSON.parse(data).body.des;
            var href = JSON.parse(data).body.href;
            var new_ct = '<div class="new-ct">' +
                '<div class="img-ct">' +
                '<a href="' +
                href +
                '">' +
                '<img alt="img" src="' +
                img +
                '                   ">' +
                '</a>' +
                '</div>' +
                '<div class="text-ct">' +
                '<div class="name">' +
                '<a href="' +
                href +
                '">' +
                '<p>' +
                title +
                '</p>' +
                '</a>' +
                '</div>' + 
                '<div class="description-ct">' +
                '<p>' +
                des +
                '</p>' +
                '</div>' +
                '<a class="read-more" href="' +
                href +
                '">Read More ></a>' +
                '</div>' +
                '</div>';
            $(".new-ct:last").after(new_ct);
            if($(".new-ct").length == JSON.parse(data).count_array) {
                $(".news-btn").remove();
            }
        }
    });
});
