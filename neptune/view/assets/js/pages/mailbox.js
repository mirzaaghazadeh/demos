$(document).ready(function() {

    "use strict";
    $('#compose-editor').summernote({
        height: 200,
        placeholder: 'نوشتن...'
    });
    $('#reply-editor').summernote({
        height: 400,
        placeholder: 'ریپلای...'
    });
});