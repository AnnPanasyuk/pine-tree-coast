$(".news-btn").on('click', function() {
    $.ajax({
        method: 'POST',
        url: './news.php',
        data: {
            action: 'load',
            current: $(".new-ct").length
        },
        success: function(data) {
            console.log(data);
        }
    });
});