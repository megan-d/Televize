import React from 'react';
import Button from 'react-bootstrap/Button';

function Movie(props) {
  return (
    <div className='card background'>
      <img alt='show' src={props.image} className='poster'></img>
      <h1 className='movie-title'>{props.name}</h1>
      <div>
        {/* if isRec is true, Learn More button should run a getRecDetails function that keeps isRec true. Then, will want back button to go back to the recommedations list  */}
        {props.isRec ? (
          <Button variant='warning' onClick={() => props.getRecDetails(props.id)}>
            Learn More
          </Button>
        ) : (
          <Button variant='warning' onClick={() => props.getDetails(props.id)}>
            Learn More
          </Button>
        )}
        
        {props.isSearching ? (
          <Button
            variant='warning'
            onClick={() => props.findSimilarSearch(props.id)}
          >
            Find Similar Shows
          </Button>
        ) : (
          <Button variant='warning' onClick={() => props.findSimilar(props.id)}>
            Find Similar Shows
          </Button>
        )}
      </div>
    </div>
  );
}

export default Movie;
