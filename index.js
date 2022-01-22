//URL: https://www.arrivia.com/explore-opportunities/

let jobs = [];

function jobSelection() {
  document.querySelectorAll(".job").forEach((obj) => {
    jobs.push({
      title: obj.querySelector(".job_title").textContent,
      location: obj.querySelector(".job_location").textContent,
      URL: obj.querySelector(".read-apply").href,
    });
  });
  console.log(jobs);
}

jobSelection();

function renderJobs() {
  let $html = document.querySelector(".js-focus-visible");
  $html.innerHTML = "";
  let title = document.createElement("div");
  title.innerHTML = `<h1 style="padding:20px">TEST: Alejandra Sánchez</h1>`;
  let table = document.createElement("table");
  table.innerHTML = `
        <thead>
            <th>#</th>
            <th>JOB TITLE</th>
            <th>LOCATION</th>
            <th>URL</th>
        </thead>
        <tbody class="table_body"></tbody>
      `;
  $html.appendChild(title);
  $html.appendChild(table);

  let body = document.querySelector(".table_body");
  jobs.forEach((obj, index) => {
    body.innerHTML += `
        <td style="padding:20px">${index}</td>
        <td style="padding:20px">${obj.title}</td>
        <td style="padding:20px">${obj.location}</td>
        <td style="padding:20px"><a href='${obj.URL}'>${obj.URL}</a></td>
    
     `;
  });
}

renderJobs();
