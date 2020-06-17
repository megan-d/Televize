import React from 'react';
import Button from 'react-bootstrap/Button';

function Movie(props) {
  return (
    <div className='card background'>
      <img alt='show' src={props.image} className='poster'></img>
      <h1 className='movie-title'>{props.name}</h1>
      <div>
        <Button variant='info' onClick={() => props.getDetails(props.id)}>
          Learn More
        </Button>
        <Button variant='info' onClick={() => props.findSimilar(props.id)}>
          Find Similar
        </Button>
      </div>
    </div>
  );
}

export default Movie;
