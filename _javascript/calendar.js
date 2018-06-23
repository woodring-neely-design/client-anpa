$(document).ready(() => {

  $.ajax({
    url: 'events.yml',
    dataType: 'text',
  }).done((yml) => {
    const data = jsyaml.load(yml);
    for (let event of data.items) {
      const html = `
      <div style="margin-bottom: 8rem">
        <h2 class="title is-3">${event.title}</h2>
        <h2 class="title is-4">By: ${event.author}</h2>
        <h2 class="title is-6">${event.date}</h2>
        <img style="max-height: 30rem" src="${event.image}"></img>
        <p> ${event.body} </p>
      </div>`;

      const div = document.createElement('div');
      div.innerHTML = html;
      $('#events-root').append(div);
    }

    $('#events').removeClass('is-loading');
  }).fail((e, status, error) => {
    console.debug(e + status + error);
  });
});
