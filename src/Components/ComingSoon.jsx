import React from 'react';
import '../Styles/ComingSoon.css';

const ComingSoon = ({ movieData, clickHandler }) => {
  return (
    <div className='comingSoonContainer scrollmenu'>
      {movieData.results.map((movie, index) => (
        <div key={index} className='movie'>
          <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} onClick={() => clickHandler(movie.title, movie.id)} />
        </div>
      ))}
    </div>
  );
};
export default ComingSoon;
