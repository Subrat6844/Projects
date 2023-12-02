const API_KEY = "api_key=1cf50e6248dc270629e802686245c2c8";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + "/search/movie?" + API_KEY + "&query=''";

async function getMovie(api) {
  let response = await fetch(api);
  let data = await response.json();
  showMovies(data.results);
}
const MovieBox = document.querySelector(".rows");
function showMovies(data) {
  MovieBox.innerHTML = "";
  for (const item of data) {
    const box = document.createElement("div");
    box.classList.add("card");
    box.innerHTML = `<img src="${IMG_URL + item.poster_path}" alt="kuch bhi">
            <div class="hidden">
                <div class="top">
                    <h2>${item.title}</h2>
                    <p>${item.vote_average}</p>
                </div>
                <p>Overview:</p>
                <p>${item.overview}</p>
            </div>`;
    MovieBox.appendChild(box);
  }
}
document.querySelector(".searchBar").addEventListener("keyup", (e) => {
  if (e.target.value != "") {
    getMovie(searchURL + e.target.value);
  } else {
    getMovie(API_URL);
  }
});
getMovie(API_URL);
