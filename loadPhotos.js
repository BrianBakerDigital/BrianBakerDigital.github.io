(function () {
  $.getJSON("photos.json", function (data) {
    var photos = data.photos;

    $.each(photos, function ( k, v ) {
      $('#photos').append('<img src="'+v.imgURL+'">');
    })
  });
})();