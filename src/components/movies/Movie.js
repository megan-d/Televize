import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { key } from '../../config';
import Details from './Details';

function Movie(props) {

  return props.image !== 'none' ? (
    <div className='card'>
      <img alt='movie' src={props.image} className='poster'></img>
      <h1 className='movie-title'>{props.title}</h1>
      <button href='/details' onClick={() => props.getDetails(props.id)}>
        Learn more
      </button>
    </div>
  ) : (
    <div className='card'>
      <div className='no-image'>No image available</div>
      <h1>{props.title}</h1>
      <button href='/details' onClick={() => props.getDetails(props.id)}>
        Learn more
      </button>
    </div>
  );
}

export default Movie;
