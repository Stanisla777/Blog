$(document).ready(function () {
  "use strict";

  var count = 0;
  $('.posts__show-more').on('click', function () {
    for (var i = 1 + count; i < 7 + count; i++) {
      var promise = getPost(i);
      promise.then(addingItems);
    }

    count = count + 6;
  });

  function addingItems(data) {
    data.forEach(function (item, i, arr) {
      var title = item.title;
      title = title[0].toUpperCase() + title.substr(1).toLowerCase();
      var body = item.body;
      body = body[0].toUpperCase() + body.substr(1).toLowerCase();
      var elem = "<a href=\"#\" class=\"col-flex posts__item \"><div class=\"posts__title\">".concat(title, "</div><div class=\"posts__body\">").concat(body, "</div><div class=\"posts__further\"> Read More</div></a>");
      $('.row-post').append(elem);
    });
  }
})