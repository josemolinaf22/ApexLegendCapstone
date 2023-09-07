// const choicesDiv = document.querySelector('#choices')
const seeLegends = document.querySelector("#see-all");
const allLegendsDiv = document.querySelector("#all-legends");
const favLegendsDiv /* choicesDiv*/ = document.querySelector("#favLegends");
const backToTopButton = document.querySelector(".back-to-top");

let legends = [];
let favLegends = [];

// VV Controller <VV i think
const makeLegendChoiceCard = (legend) => {
  return `
    <div class="character-container" id="${legend.id}">
    <img src='${legend.imgAddress}' alt='${legend.name}' onclick='putLegendBack(${legend.id})'/>
    <h3>${legend.name}</h3>
    </div>
    `;
};

const makeLegendDisplayCard = (legend) => {
  return `
    <div class="character-container tooltip-wrap" id="${legend.id}">
    <img  id='charac-img' src='${legend.imgAddress}' alt='${legend.name}' onclick='chooseLegend(${legend.id})'/>
    <h3>${legend.name}</h3>
    <p>${legend.lure}</p>
    <div class="tooltip-content">
    <div class="ability-container"> 
    <div class="desc-ability"> 
    <img src="${legend.tactical[0].imgAddress}" class="ability-img"/>
    <p>${legend.tactical[0].name}</p> 
    </div>
    <div class="desc-ability"> 
    <img src="${legend.passive[0].imgAddress}" class="ability-img"/>
    <p>${legend.passive[0].name}</p> 
    </div>
    <div class="desc-ability"> 
    <img src="${legend.ultimate[0].imgAddress}" class="ability-img"/>
    <p>${legend.ultimate[0].name}</p> 
    </div>
    
    </div>
    </div>
    </div>
    `;
};

const renderFavLegends = (legends) => {
  favLegendsDiv.innerHTML = "";
  // console.log(legends)
  legends.forEach((legend) => {
    document.getElementById(legend.id).style.display = "none";
    let legendHtml = makeLegendChoiceCard(legend);
    favLegendsDiv.innerHTML += legendHtml;
  });
};

const chooseLegend = (id) => {
  axios.get("http://localhost:4006/api/legends").then((res) => {
    let index = res.data.findIndex((legend) => legend.id === id);
    let body = res.data[index];
    axios
      .post("http://localhost:4006/api/favLegends", body)
      .then((res) => {
        renderFavLegends(res.data);
      })
      .catch((error) => {
        alert("Too many legends!!");
      });
  });
};

const putLegendBack = (id) => {
  // console.log(id)
  axios.delete(`/api/favLegends/${id}`).then((res) => {
    renderFavLegends(res.data);
    document.getElementById(id).style.display = "flex";
  });
};
// This data from server
const allLegends = () => {
  axios.get("/api/legends").then((res) => {
    allLegendsDiv.innerHTML = "";

    res.data.forEach((legend) => {
      let legendHtml = makeLegendDisplayCard(legend);
      allLegendsDiv.innerHTML += legendHtml;
    });

    seeLegends.style.display = "none";
    getAllFavLegends();
  });
};

//hide button
const showOnPx = 100;
const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};
seeLegends.addEventListener("click", allLegends);
backToTopButton.addEventListener("click", goToTop);

//back to top button
document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

const getAllFavLegends = () => {
  axios.get("http://localhost:4006/api/favLegends").then((res) => {
    renderFavLegends(res.data.favLegends);
  });
};
getAllFavLegends();
