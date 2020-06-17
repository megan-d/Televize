import React, { Fragment } from 'react';
import Movies from '../movies/Movies';
import Button from 'react-bootstrap/Button';
import Spinner from '../layout/Spinner';

const SearchResults = ({
  searchfield,
  shows,
  isLoading,
  isSearching,
  reset,
  getDetails,
  isRec,
  findSimilar
}) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <Fragment>
        {/* If searching, back button should take you back to search results. If looking at recommendations, back button should take you back to details for movie. */}
        {!isRec ? (
          <Fragment>
            <p>Showing results for '{searchfield}'</p>
            <Button onClick={reset}>Back</Button>
          </Fragment>
        ) : <Button onClick={getDetails}>Back</Button>}

        <Movies
          shows={shows}
          isLoading={isLoading}
          searchfield={searchfield}
          isSearching={isSearching}
          getDetails={getDetails}
          reset={reset}
          findSimilar={findSimilar}
        />
      </Fragment>
    </div>
  );
};

export default SearchResults;
