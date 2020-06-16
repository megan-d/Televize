import React, { Fragment } from 'react';
import Movies from '../movies/Movies';
import Button from 'react-bootstrap/Button';

const SearchResults = ({ searchfield, shows, isLoading, isSearching, reset, getDetails }) => {
  return (
    <div>
      <Fragment>
        <Button onClick={reset}>Back to Search</Button>
        <p>Showing results for '{searchfield}'</p>
        <Movies
          shows={shows}
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
