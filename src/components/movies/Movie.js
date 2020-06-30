import React from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from '../layout/Spinner';

const Movie = (props) => {
  //Check to see if show name is 10 words or longer. If so, remove ending words and put ... so that name doesn't spill out of card boundary
  const nameArray = props.name.split(' ');
  let shortName;
  if (nameArray.length >= 10) {
    nameArray.splice(nameArray.length - 2, 2);
    shortName = nameArray.join(' ') + ' ...';
  } else {
    shortName = props.name;
  }

  return props.isLoading ? (
    <Spinner />
  ) : (
    <div className='card background'>
      <img alt='show' src={props.image} className='poster'></img>
      <h1 className='movie-title'>{shortName}</h1>

      <div>
        {/* if isRec is true, Learn More button should run a getRecDetails function that keeps isRec true. Then, will want back button to go back to the recommedations list  */}
        {props.isRec ? (
          <Button
            size='sm'
            style={{ maxWidth: '120px' }}
            variant='warning'
            onClick={() => props.getRecDetails(props.id)}
            className='box-shadow px-1 mb-3 mx-1 button-text'
          >
            Learn More
          </Button>
        ) : (
          <Button
            size='sm'
            style={{ maxWidth: '120px' }}
            variant='warning'
            onClick={() => props.getDetails(props.id)}
            className='box-shadow px-1 mb-3 mx-1 button-text'
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
            className='box-shadow px-1 mb-3 mx-1 button-text'
          >
            Find Similar
          </Button>
        ) : (
          <Button
            size='sm'
            style={{ maxWidth: '120px' }}
            variant='warning'
            onClick={() => props.findSimilar(props.id)}
            className='box-shadow px-1 mb-3 mx-1 button-text'
          >
            Find Similar
          </Button>
        )}
      </div>
    </div>
  );
};

export default Movie;
