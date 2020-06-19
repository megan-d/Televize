import React, { Fragment, useEffect } from 'react';
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
  getRecDetails,
  resetRec,
  isRec,
  findSimilar,
}) => {
  //Have screen scroll to top after loading
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <Fragment>
        {/* If searching, back button should take you back to search results. If looking at recommendations, back button should take you back to recommendations. */}
        {searchfield ? (
          <Fragment>
            {/* <p>Showing results for '{searchfield}'</p> */}
            <Button variant='light' onClick={reset}>Back Home</Button>
          </Fragment>
        ) : (
          <Button variant='light' onClick={reset}>Back Home</Button>
        )}

        <Movies
          shows={shows}
          isLoading={isLoading}
          searchfield={searchfield}
          isSearching={isSearching}
          isRec={isRec}
          getDetails={getDetails}
          getRecDetails={getRecDetails}
          reset={reset}
          resetRec={resetRec}
          findSimilar={findSimilar}
        />
      </Fragment>
    </div>
  );
};

export default SearchResults;
