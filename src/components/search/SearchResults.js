import React, { Fragment } from 'react';
import Movies from '../movies/Movies';

const SearchResults = ({ searchfield, movies, isLoading, isSearching, reset, getDetails, goBack }) => {
  return (
    <div>
      <Fragment>
        <button onClick={reset}>Back</button>
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
