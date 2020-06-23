import React from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from '../layout/Spinner';

function Movie(props) {
  return props.isLoading ? (
    <Spinner />
  ) : (
  <div className='card background'>
  <img alt='show' src={props.image} className='poster mt-3'></img>
  <h1 className='movie-title'>{props.name}</h1>
  <div>
    {/* if isRec is true, Learn More button should run a getRecDetails function that keeps isRec true. Then, will want back button to go back to the recommedations list  */}
    {props.isRec ? (
      <Button
        size='sm'
        style={{ maxWidth: '120px' }}
        variant='warning'
        onClick={() => props.getRecDetails(props.id)}
        className='px-1 mb-3 mx-1'
      >
        Learn More
      </Button>
    ) : (
      <Button
        size='sm'
        style={{ maxWidth: '120px' }}
        variant='warning'
        onClick={() => props.getDetails(props.id)}
        className='px-1 mb-3 mx-1'
      >
        Learn More
      </Button>
    )}

    {props.isSearching ? (
      <Button
        size='sm'
        style={{ maxWidth: '120px' }}
        variant='warning'
        onClick={() => props.findSimilarSearch(props.id)}
        className='px-1 mb-3 mx-1'
      >
        Similar Shows
      </Button>
    ) : (
      <Button
        size='sm'
        style={{ maxWidth: '120px'}}
        variant='warning'
        onClick={() => props.findSimilar(props.id)}
        className='px-1 mb-3 mx-1'
      >
        Similar Shows
      </Button>
    )}
  </div>
</div>
  );
}

export default Movie;
