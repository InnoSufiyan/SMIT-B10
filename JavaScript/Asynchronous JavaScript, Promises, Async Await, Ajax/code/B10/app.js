console.log("checking it is working");

const response = fetch(
  "https://maroon-shorts.cyclic.cloud/api/jobAds/all?limit=10&pageNo=1&keyWord=graphic&category="
)
  .then((response) => {
    console.log(response, "====first response");
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("chana paapri nahin hai");
    }
  })
  .then((sufiyan) => {
    console.log(sufiyan, "chacha miyan ka jawab");
    if (sufiyan.status) {
      UIPerDikhao(sufiyan.data);
    } else {
        throw new Error(sufiyan.message)
    }
  })
  .catch((meraError) => {
    console.log(meraError, "===>>> meraError");
    alert(meraError.message);
  });

console.log(response, "===>> response");

const UIPerDikhao = (job) => {
  let text = "";
  console.log(job, "====>>job");
  job.forEach((element) => {
    text += `
    <div class="card text-center">
    <div class="card-header">
      ${element.companyName}
    </div>
    <div class="card-body">
      <h5 class="card-title">${element.designation}</h5>
      <p class="card-text">${element.desc.slice(0, 200)}.</p>
      <a href="#" class="btn btn-primary">${element.views} Views</a>
    </div>
    <div class="card-footer text-body-secondary">
      ${element.city}
    </div>
  </div>
        `;
  });
  document.body.innerHTML = text;
};
