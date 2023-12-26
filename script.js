const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

let main = document.querySelector(".main");

async function getMovies(api) {
  let res = await fetch(api);
  let data = await res.json();

  showItems(data.results);
}

async function showItems(data) {
  main.innerHTML = "";

  data.forEach((item) => {
    // console.log(item);

    let outerdiv = document.createElement("div");
    outerdiv.innerHTML = `
                      <div class="card">

                          <div class="img-div  ">
                                <img src="${IMGPATH + item.poster_path}"  alt="Image Not Found"/>
                          </div>
  
                          <div class="title-rating">
                                <p>${item.original_title}</p>
                                <p>${item.vote_average}</p>
                          </div>
  
                           <div class="overview">
                                <p>${item.overview}</p>
                           </div>
                                
                      </div>;`;

    main.appendChild(outerdiv);
  });
}

document.querySelector("input").addEventListener("keyup", function (event) {
  if (event.target.value != "") {
    getMovies(SEARCHAPI + event.target.value);
  } else {
    getMovies(APIURL);
  }
});

getMovies(APIURL);
