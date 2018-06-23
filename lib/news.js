'use strict';

$(document).ready(function () {
  $('#news').rss("http://feeds.feedburner.com/premiumpixels", {
    entryTemplate: '\n      <article>\n        <time>{date}</time>\n        <p> {bodyPlain} </p>\n      </article>',

    dateFormat: 'MMMM Do, YYYY',

    success: function success() {
      $('#news').removeClass("is-loading");
    }
  });
});