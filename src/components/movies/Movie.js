import React from 'react';
import Button from 'react-bootstrap/Button';

function Movie(props) {
  return (
    <div className='card'>
      <img alt='show' src={props.image} className='poster'></img>
      <h1 className='movie-title'>{props.name}</h1>
      <Button onClick={() => props.getDetails(props.id)}>Learn More</Button>
      
    </div>
  );
}

export default Movie;
