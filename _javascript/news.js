$(document).ready(() => {
  $('#news').rss("http://feeds.feedburner.com/premiumpixels", { 
    entryTemplate: `
      <article>
        <time>{date}</time>
        <p> {bodyPlain} </p>
      </article>`,

    dateFormat: 'MMMM Do, YYYY',

    success() {
      $('#news').removeClass("is-loading");
    }
  });
});

