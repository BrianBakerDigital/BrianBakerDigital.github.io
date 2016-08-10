(function () {
  $.getJSON("/data/photos.json", function (data) {
    var photos = data.photos;

    $.each(photos, function ( k, v ) {
      var imgURL = v.imgURL,
          imgTitle = v.title,
          imgCaption = v.caption || '';

      $('#photos').append(
        '<div class="img-container">'+
          '<a href="'+imgURL+'" data-lightbox="'+imgTitle+'" data-title="'+imgCaption+'">'+
            '<img src="'+imgURL+'">'+
          '</a>'+
        '</div>');
    })
  });
  // Initialize lightbox
  lightbox.option ({
    "fadeDuration": 300,
    "resizeDuration": 500,
    "wrapAround": true
  })
})();