import React from 'react';

const MovieSearch = ({ searchMovie, handleInputChange, searchTerm }) => {
  return (
    <div className='movieSearchContainer'>
      <input type='text' id='search-term' value={searchTerm} onChange={handleInputChange}></input>
      <button onClick={() => searchMovie(document.getElementById('search-term').value)}>Search</button>
    </div>
  );
};
export default MovieSearch;
