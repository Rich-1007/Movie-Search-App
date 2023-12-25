const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

let main = document.querySelector(".main-11");

async function getMovies(api) {
  let res = await fetch(api);
  let data = await res.json();

  showMovies(data.results);
}

async function showMovies(dd) {
  main.innerHTML = "";

  dd.forEach((item) => {
    let newdiv = document.createElement("div");

    newdiv.classList.add = "papa";
    newdiv.innerHTML = `
      <div class = "aa">
      
           <div class = "tt">
                 <img src="${IMGPATH + item.poster_path}">      
                     
                 <div class = "mm">
                    <p>${item.original_title}</p>
                    <p>${item.vote_average}</p>
                    
                 </div>
                 
                 <div class = "qq">
                 
                    <p>${item.overview} </p>
                 </div>
           </div>
      
      
      
      </div>

      `;
    main.appendChild(newdiv);
  });
}

document.querySelector("#search").addEventListener("keyup", function (event) {
  if (event.target.value != "") {
    getMovies(SEARCHAPI + event.target.value);
  } else {
    getMovies(APIURL);
  }
});

getMovies(APIURL);
