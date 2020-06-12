import React, { Fragment } from 'react';
import Movies from '../movies/Movies';

const SearchResults = ({ searchfield, movies, isLoading, isSearching, reset }) => {
  return (
    <div>
      <Fragment>
        <button onClick={reset}>Back to Search</button>
        <p>Showing results for '{searchfield}'</p>
        <Movies
          movies={movies}
          isLoading={isLoading}
          searchfield={searchfield}
          isSearching={isSearching}
        />
      </Fragment>
    </div>
  );
};

export default SearchResults;
