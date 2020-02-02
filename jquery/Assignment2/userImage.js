function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.imageUploadWrapper').hide();

      $('.fileUploadImage').attr('src', e.target.result);
      $('.fileUploadSection-content').show();
      $('#getImage').attr('src', e.target.result);
      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}

function removeUpload() {
  $('.fileUploadInput').replaceWith($('.fileUploadInput').clone());
  $('.fileUploadSection-content').hide();
  $('.imageUploadWrapper').show();
}
$('.imageUploadWrapper').bind('dragover', function () {
        $('.imageUploadWrapper').addClass('imageDrop');
    });
    $('.imageUploadWrapper').bind('dragleave', function () {
        $('.imageUploadWrapper').removeClass('imageDrop');
});