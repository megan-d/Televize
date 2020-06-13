import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import Movie from './Movie';

function Movies(props) {
  return props.isLoading ? (
    <Spinner />
  ) : !props.isLoading && props.movies.status_code === 34 ? (
    <p>Your search did not return any results. Please try another search.</p>
  ) : (
    !props.isLoading &&
    props.movies.length > 0 && (
      <Fragment>
        <h2 className='genre-heading'>Popular {props.genre} Movies</h2>
        <div className='cards'>
          {props.movies.map((movie, index) => {
            //Check to see if there's a poster image for the movie. If not, set the image to null so can display generic image.
            let image;
            movie.poster_path
              ? (image = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`)
              : (image = null);
            return (
              <Movie
                key={index}
                id={movie.id}
                title={movie.title}
                summary={movie.overview}
                image={image}
              />
            );
          })}
        </div>
      </Fragment>
    )
  );
}

Movies.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  movies: PropTypes.array.isRequired,
};

export default Movies;
