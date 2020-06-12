import React from 'react';
import { Link } from 'react-router-dom';

function Movie(props) {
  return props.image ? (
    <div className='card'>
      <img alt='movie' src={props.image}></img>
      <h1>{props.title}</h1>
      <Link to='/details'>Learn more</Link>
    </div>
  ) : (
    <div className='card'>
      <div className='no-image'>No image available</div>
      <h1>{props.title}</h1>
      <Link to='/details'>Learn more</Link>
    </div>
  );
}

export default Movie;
