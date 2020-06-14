import React, { Fragment } from 'react';
import Movies from '../movies/Movies';
import Button from 'react-bootstrap/Button';

const SearchResults = ({ searchfield, movies, isLoading, isSearching, reset, getDetails, goBack }) => {
  return (
    <div>
      <Fragment>
        <Button onClick={reset}>Back</Button>
        <p>Showing results for '{searchfield}'</p>
        <Movies
          movies={movies}
          isLoading={isLoading}
          searchfield={searchfield}
          isSearching={isSearching}
          getDetails={getDetails}
          reset={reset}
        />
      </Fragment>
    </div>
  );
};

export default SearchResults;
