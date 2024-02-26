import React from 'react';
import '../Styles/MovieDetails.css';

const MovieDetails = ({ searchedMovie, selectedMovie }) => {
  return (
    <div className='movieDetails'>
      <div className='titleImageContainer'>
        {selectedMovie?.poster_path || searchedMovie?.poster_path ? <img src={'https://image.tmdb.org/t/p/w500' + (searchedMovie?.poster_path || selectedMovie?.poster_path)} alt={searchedMovie?.title || selectedMovie?.title} /> : null}
        <p id='movieTitle'>{selectedMovie?.title || searchedMovie?.title}</p>
      </div>
      <p id='movieTag'>{selectedMovie?.tagline}</p>
      <p id='movieOverview'>{selectedMovie?.overview || searchedMovie?.overview}</p>
    </div>
  );
};
export default MovieDetails;
