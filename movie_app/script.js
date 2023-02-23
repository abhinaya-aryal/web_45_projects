const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ddcbbae4845822bd85492e166a0a6d2e&page=1"; 
const IMG_PATH = "https://image.tmdb.org/t/p/w500";
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=ddcbbae4845822bd85492e166a0a6d2e&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

const getClassByRate = (vote) => {
  if(vote >= 8){
    return 'green';
  }else if(vote >= 5){
    return 'orange';
  }else{
    return 'red';
  }
}

const showMovies = (movies) =>{
  main.innerHTML = '';
  movies.forEach((movie) => {
    const {title, poster_path, vote_average, overview} = movie;

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
      <img src=${IMG_PATH + poster_path} alt=${title}>
        <div class="movie-info">
          <h3>${title}</h3>
          <span class=${getClassByRate(vote_average)}>${vote_average}</span>
        </div>
        <div class="overview">
          <h3>${title}</h3>
          ${overview}
        </div>
    `
  main.appendChild(movieEl);
  });
}


const getMovies = async(url) => {
  const res = await fetch(url);
  const data = await res.json();
  if(data.total_results === 0){
    main.innerHTML="Not found! Search for another movie !!!";
    main.style.color = "#fff";
    main.style.marginTop = "20px"
  }else{
  showMovies(data.results);
  }
}

getMovies(API_URL);

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const searchTerm = search.value;
  if(searchTerm && searchTerm !== ''){
    getMovies(SEARCH_URL + searchTerm);
    search.value = '';
  }else{
    window.location.reload();
  }
})


