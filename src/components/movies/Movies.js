import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import Movie from './Movie';
import styled from 'styled-components';

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 20px;
`;

const Movies = (props) => {
  return props.isLoading ? (
    <Spinner />
  ) : props.isSearching && props.shows.length === 0 ? (
    <p className='text-center text-results'>
      Your search did not return any results. Please try another search.
    </p>
  ) : (
    !props.isLoading &&
    props.shows.length > 0 && (
      <Fragment>
        <StyledCards>
          {props.shows.map((show, index) => {
            return (
              <Movie
                key={index}
                id={show.id}
                name={show.name}
                summary={show.overview}
                image={`https://image.tmdb.org/t/p/w185/${show.poster_path}`}
                background={`https://image.tmdb.org/t/p/w1280/${show.backdrop_path}`}
                getDetails={props.getDetails}
                getRecDetails={props.getRecDetails}
                findSimilar={props.findSimilar}
                findSimilarSearch={props.findSimilarSearch}
                isRec={props.isRec}
              />
            );
          })}
        </StyledCards>
      </Fragment>
    )
  );
};

Movies.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Movies;
