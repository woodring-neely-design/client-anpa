const renderMember = (json) => `
<div class="card">
  <div class="card-image">
    <figure class="image">
      <img src="${json.image}" alt="">
    </figure>
  </div>

  <div class="card-content">
    <div class="content">
      <b>${json.name}</b>
      <div>${json.office || ''}</div>
      <div><i>${json.speciality || ''}</i></div>      
      <u>${json.email || ''}</u>
    </div>
  </div>
</div>
`

$(document).ready(() => {
  if (window.location.href.indexOf('index.html') > -1 ) {
    $.ajax({
      url: 'members.yml',
      dataType: 'text',
    }).done((yml) => {
      const data = jsyaml.load(yml);

      let rowNum = 0 ;
      let row;

      for (let member of data.members.slice(0, 4)) {
        if (rowNum == 0) {
          row = document.createElement('div');
          row.classList.add('columns');
          $('#members').append(row);
        }

        const html = renderMember(member) 
        const div = document.createElement('div');
        div.classList.add('column');
        div.innerHTML = html;
        $(row).append(div);
        rowNum = (rowNum + 1) % 4;
      }

      while(rowNum != 0) {
        const div = document.createElement('div');
        div.classList.add('column');
        $(row).append(div);
        rowNum = (rowNum + 1) % 4;
      }

      $('#members').removeClass('is-loading');
    }).fail((e, status, error) => {
      console.debug(e + status + error);
    });
  }

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

});
