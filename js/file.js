var array_files = [];
$('input[type=file]').after('<div class="file_name_ct"></div>');

function update_markup(val) {
    $(".des_file_ct").remove();
    for(var i = 0; i < val.length; i++) {
        var text_ct = '<div class="des_file_ct" data-index="' +
            val[i].lastModified +
            '"><p class="des_file">' +
            val[i].name +
            '</p><span class="close"></span></div>';
        $(".file_name_ct").append(text_ct);
    }

}

function add(x) {
    for(var i = 0; i < x.length; i++) {
        array_files[array_files.length] = document.getElementById("file").files[i];
    }
    update_markup(array_files);
}

function delete_files(b) {
    $("form").on('click', '.close', function(e) {
        e.preventDefault();
        $(this).closest(".des_file_ct").remove();
        for(var i = 0; i < b.length; i++)
        if(b[i].lastModified == $(".des_file_ct").attr("data-index")) {
            array_files.splice(b[i], 1);
        }
    });
}

delete_files(array_files);

$('input[type=file]').change(function(){
    var file_name = document.getElementById("file").files;
    add(file_name);
});
$("form button[type=submit]").on('click', function(e) {
    e.preventDefault();
    var formData = new FormData();
    for(var i = 0; i < document.getElementById("file").files.length; i++) {
        formData.append('file'+ i , document.getElementById("file").files[i]);
    }

    fetch('./ajax-programer.php', {
        method: 'POST',
        body: formData
    })

        .then(function (response) {
            return response.json();
        })

        .catch(console.log);
});