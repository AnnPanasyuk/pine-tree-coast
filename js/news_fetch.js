$(".news-btn").on('click', function() {
    var formData = new FormData();
    formData.append('current', $(".new-ct").length);
    fetch('./news.php', {
        method: 'POST',
        body: formData
    })

    .then(function (response) {
        return response.json();
    })
    .then(function(response) {
        var img = response.body.img;
        var title = response.body.title;
        var des = response.body.des;
        var href = response.body.href;
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
        if($(".new-ct").length == response.count_array) {
            $(".news-btn").remove();
        }
    })
    .catch(console.log);
});