import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Movie from './Movie';

function Movies(props) {
  return props.isLoading ? (
    <Spinner />
  ) : !props.isLoading && props.movies.length === 0 ? (
    <p>Your search did not return any results. Please try another search.</p>
  ) : (
    !props.isLoading &&
    props.movies.length > 0 && 
    <div className='cards'>
        {props.movies.map((movie, index) => {
            return (
                
                    
                <Movie 
                    key={index}
                    id={movie.id}
                    title={movie.title}
                    summary={movie.overview}
                    image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
                
            )
        }) }
    </div>
  );
}

Movies.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  movies: PropTypes.array.isRequired,
};

export default Movies;
