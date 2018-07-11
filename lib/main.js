'use strict';

var renderMember = function renderMember(json) {
  return '\n<div class="card">\n  <div class="card-image">\n    <figure class="image">\n      <img src="' + json.image + '" alt="">\n    </figure>\n  </div>\n\n  <div class="card-content">\n    <div class="content">\n      <b>' + json.name + '</b>\n      <div>' + (json.office || '') + '</div>\n      <div><i>' + (json.speciality || '') + '</i></div>      \n      <u>' + (json.email || '') + '</u>\n    </div>\n  </div>\n</div>\n';
};

$(document).ready(function () {
  if (window.location.href.indexOf('index.html') > -1) {
    $.ajax({
      url: 'members.yml',
      dataType: 'text'
    }).done(function (yml) {
      var data = jsyaml.load(yml);

      var rowNum = 0;
      var row = void 0;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data.members.slice(0, 4)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var member = _step.value;

          if (rowNum == 0) {
            row = document.createElement('div');
            row.classList.add('columns');
            $('#members').append(row);
          }

          var html = renderMember(member);
          var _div = document.createElement('div');
          _div.classList.add('column');
          _div.innerHTML = html;
          $(row).append(_div);
          rowNum = (rowNum + 1) % 4;
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

      while (rowNum != 0) {
        var div = document.createElement('div');
        div.classList.add('column');
        $(row).append(div);
        rowNum = (rowNum + 1) % 4;
      }

      $('#members').removeClass('is-loading');
    }).fail(function (e, status, error) {
      console.debug(e + status + error);
    });
  }

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});