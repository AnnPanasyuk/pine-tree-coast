$('input[type=file]').after('<div class="file_name_ct"></div>');
$('input[type=file]').change(function(e){
    var file_name = document.getElementById("file").files;
    for(var i = 0; i < file_name.length; i++) {
        var text_ct = '<p class="des_file">' +
                file_name[i].name +
            '</p>';
        console.log(text_ct);
        $(".file_name_ct").append(text_ct);
    }
});