import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
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
  findSimilarSearch
}) => {
  //Have screen scroll to top after loading
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return isLoading ? (
    <Spinner className = 'full-page'/>
  ) : (
    <div className = 'full-search-page'>
        {/* If searching, back button should take you back to search results. If looking at recommendations, back button should take you back to recommendations. */}
        {searchfield ? (
          <Fragment>
            {/* <p>Showing results for '{searchfield}'</p> */}
            <Button
              size='sm'
              style={{ maxWidth: '100px', marginLeft: '1.5rem', marginTop: '20px' }}
              variant='outline-warning'
              onClick={reset}
              className='button-text'
            >
              Back Home
            </Button>
          </Fragment>
        ) : (
          <Button
            size='sm'
            style={{ maxWidth: '100px', marginLeft: '1.5rem', marginTop: '20px' }}
            variant='outline-warning'
            onClick={reset}
            className='button-text'
          >
            Back Home
          </Button>
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
          findSimilarSearch={findSimilarSearch}
        />
    </div>
  );
};

SearchResults.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isSearching: PropTypes.bool.isRequired,
  isRec: PropTypes.bool.isRequired,
  shows: PropTypes.array.isRequired,
  searchfield: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
  resetRec: PropTypes.func.isRequired,
  getDetails: PropTypes.func.isRequired,
  getRecDetails: PropTypes.func.isRequired,
  findSimilar: PropTypes.func.isRequired,
  findSimilarSearch: PropTypes.func.isRequired,
};

export default SearchResults;
