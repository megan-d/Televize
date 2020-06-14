import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { key } from '../../config';
import Details from './Details';

function Movie(props) {
  const [showDetails, toggleDetails] = useState(false);

  let movie;
  const fetchMovie = async (e) => {
    const id = e.currentTarget.value;
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`,
      );
      const data = await response.json();
      movie = await { ...data };
      toggleDetails({...showDetails, showDetails: true})
      console.log(movie);
    } catch (error) {
      console.error(error);
    }
  };

  //NOW NEED TO FIGURE OUT HOW TO GET DETAILS COMPONENT TO DISPLAY ONCE FETCH THAT MOVIE. MAYBE USE STATE AND HAVE A FETCHED BOOLEAN AND A MOVIE OBJECT AND PASS THAT DOWN TO DETAILS COMPONENT.

  return props.image !== 'none' ? (
    <div className='card'>
      <img alt='movie' src={props.image} className='poster'></img>
      <h1 className='movie-title'>{props.title}</h1>
      <button href='/details' onClick={(e) => fetchMovie(e)} value={props.id}>
        Learn more
      </button>
    </div>
  ) : (
    <div className='card'>
      <div className='no-image'>No image available</div>
      <h1>{props.title}</h1>
      <button href='/details' onClick={(e) => fetchMovie(e)} value={props.id}>
        Learn more
      </button>
    </div>
  );
}

export default Movie;
