import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Spinner from '../layout/Spinner';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(14, 13, 13);
  width: 185px;
  height: 400px;
  margin: 1rem 20px;
  border-radius: 5px;
  box-shadow: 0 0 6px rgb(90, 89, 89);
`;

const MovieTitle = styled.h1`
  font-size: 20px;
  text-align: center;
`;

const Poster = styled.img`
  height: 278px;
  width: 185px;
  object-fit: cover;
  border-radius: 5px;
`;

const Movie = (props) => {
  //Check to see if show name is 10 words or longer. If so, remove ending words and put ... so that name doesn't spill out of card boundary
  const nameArray = props.name.split(' ');
  let shortName;
  if (nameArray.length >= 8) {
    nameArray.splice(nameArray.length - 2, 2);
    shortName = nameArray.join(' ') + ' ...';
  } else {
    shortName = props.name;
  }

  return props.isLoading ? (
    <Spinner />
  ) : (
    <StyledCard>
      <Poster alt='show' src={props.image}>
      </Poster>
      <MovieTitle>{shortName}</MovieTitle>

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
    </StyledCard>
  );
};

//id, name, summary, image, background
Movie.propTypes = {
  isRec: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  getDetails: PropTypes.func.isRequired,
  getRecDetails: PropTypes.func.isRequired,
  findSimilar: PropTypes.func.isRequired,
  findSimilarSearch: PropTypes.func.isRequired,
};

export default Movie;
