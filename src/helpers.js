// helpers.js
const fetchMovies = (options) => {
  return fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options).then((response) => response.json());
};

const fetchMovieDetails = (id, options) => {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options).then((response) => response.json());
};

const fetchSearchMovie = (movie, options) => {
  return fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&language=en-US`, options).then((response) => response.json());
};

export { fetchMovies, fetchMovieDetails, fetchSearchMovie };
