import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { key } from '../../config';
import Details from './Details';
import Button from 'react-bootstrap/Button';

function Movie(props) {
  return props.image !== 'none' ? (
    <div className='card'>
      <img alt='movie' src={props.image} className='poster'></img>
      <h1 className='movie-title'>{props.title}</h1>
      <Button onClick={() => props.getDetails(props.id)}>Learn More</Button>
    </div>
  ) : (
    <div className='card'>
      <div className='no-image'>No image available</div>
      <h1 className='movie-title'>{props.title}</h1>
      <Button onClick={() => props.getDetails(props.id)}>Learn More</Button>
    </div>
  );
}

export default Movie;
