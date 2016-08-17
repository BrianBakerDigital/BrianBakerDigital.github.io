(function () {
  $.getJSON("/data/photos.json", function (data) {
    var photos = data.photos;

    $.each(photos, function ( k, v ) {
      var imgURL = v.imgURL,
          imgSet = v.set,
          imgCaption = v.caption || '';

      $('#photos').append(
        '<a href="'+imgURL+'" data-lightbox="'+imgSet+'" data-title="'+imgCaption+'" class="img-container">'+
          '<img src="'+imgURL+'">'+
        '</a>'
      );
    })
  });
  // Initialize lightbox
  lightbox.option ({
    "fadeDuration": 300,
    "resizeDuration": 500,
    "wrapAround": true
  })
})();