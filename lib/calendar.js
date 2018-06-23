'use strict';

$(document).ready(function () {

  $.ajax({
    url: 'events.yml',
    dataType: 'text'
  }).done(function (yml) {
    var data = jsyaml.load(yml);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = data.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var event = _step.value;

        var html = '\n      <div style="margin-bottom: 8rem">\n        <h2 class="title is-3">' + event.title + '</h2>\n        <h2 class="title is-4">By: ' + event.author + '</h2>\n        <h2 class="title is-6">' + event.date + '</h2>\n        <img style="max-height: 30rem" src="' + event.image + '"></img>\n        <p> ' + event.body + ' </p>\n      </div>';

        var div = document.createElement('div');
        div.innerHTML = html;
        $('#events-root').append(div);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    $('#events').removeClass('is-loading');
  }).fail(function (e, status, error) {
    console.debug(e + status + error);
  });
});