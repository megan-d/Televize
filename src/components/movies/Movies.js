import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import Movie from './Movie';

function Movies(props) {
  return props.isLoading ? (
    <Spinner />
  ) : props.isSearching && props.shows.length === 0 ? (
    <p className='text-center'>Your search did not return any results. Please try another search.</p>
  ) : (
    !props.isLoading &&
    props.shows.length > 0 && (
      <Fragment>
        
        <div className='cards'>
          {props.shows.map((show, index) => {
            //Check to see if there's a poster image for the movie. If not, set the image to null so can display generic image.
            let image;
            show.poster_path
              ? (image = `https://image.tmdb.org/t/p/w185/${show.poster_path}`)
              : (image = 'none');
              let background;
              show.backdrop_path
                ? (background = `https://image.tmdb.org/t/p/w1280/${show.backdrop_path}`)
                : (background = 'none');
            return (
              <Movie
                key={index}
                id={show.id}
                name={show.name}
                summary={show.overview}
                image={image}
                background={background}
                getDetails={props.getDetails}
                getRecDetails={props.getRecDetails}
                findSimilar={props.findSimilar}
                findSimilarSearch={props.findSimilarSearch}
                isRec={props.isRec}
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
};

export default Movies;
