import React, { useEffect, useState } from 'react';
import './Styles/App.css';

import ComingSoon from './Components/ComingSoon';
import MovieDetails from './Components/MovieDetails';
import MovieSearch from './Components/MovieSearch';
import './helpers.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchMovieDetails, fetchMovies, fetchSearchMovie } from './helpers.js';

function App() {
  const [movieData, setMovieData] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState('');
  const [searchedMovie, setSearchedMovie] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  //this fetches the list of new movies
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGY2MDQzMmEwZTAwMTgzNTVmN2M0ZTQ3NjQxNTljYSIsInN1YiI6IjY1Y2Y5ZjcwNzA2ZTU2MDE3OTM5ZDE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g5cPNI1J8RL7mbYYn_mVVoh0D02oC_LZqQb50H42hX8',
      },
    };

    fetchMovies(options)
      .then((data) => {
        setMovieData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Check if movieData is null or undefined before rendering
  if (!movieData) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  function getMovieDetails(id) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGY2MDQzMmEwZTAwMTgzNTVmN2M0ZTQ3NjQxNTljYSIsInN1YiI6IjY1Y2Y5ZjcwNzA2ZTU2MDE3OTM5ZDE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g5cPNI1J8RL7mbYYn_mVVoh0D02oC_LZqQb50H42hX8',
      },
    };

    fetchMovieDetails(id, options)
      .then((data) => {
        setSelectedMovie(data);
        console.log('Selected movie data:', data);
      })
      .catch((err) => console.error(err));
  }

  //this is called when the user clicks the image of a new movies
  function clickHandler(title, id) {
    setSearchTerm('');
    setSearchedMovie(null);
    getMovieDetails(id);
  }

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  function getSearchedMovie(movie) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGY2MDQzMmEwZTAwMTgzNTVmN2M0ZTQ3NjQxNTljYSIsInN1YiI6IjY1Y2Y5ZjcwNzA2ZTU2MDE3OTM5ZDE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g5cPNI1J8RL7mbYYn_mVVoh0D02oC_LZqQb50H42hX8',
      },
    };

    fetchSearchMovie(movie, options)
      .then((data) => {
        if (data.results.length > 0) {
          const firstMovie = data.results[0];
          setSearchedMovie(firstMovie);
          console.log('searched movie data:', firstMovie);
        } else {
          setSearchedMovie(null);
        }
      })
      .catch((err) => console.error(err));
  }

  function searchMovie(movie) {
    setSelectedMovie(null);
    getSearchedMovie(movie);
  }

  return (
    <div className='App '>
      <ComingSoon movieData={movieData} clickHandler={clickHandler} />

      <div className='lowerContainer'>
        <MovieDetails searchedMovie={searchedMovie} selectedMovie={selectedMovie} />
        <MovieSearch searchMovie={searchMovie} handleInputChange={handleInputChange} searchTerm={searchTerm} />
      </div>
      <div className='test'></div>
    </div>
  );
}

export default App;
