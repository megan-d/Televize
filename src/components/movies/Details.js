import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Spinner from '../layout/Spinner';


const Details = (props) => {

    //Use hooks instead of media queries so backgroundImage is removed on mobile size
    const [windowWidth, setWidth] = useState(window.innerWidth);
    const breakpoint = 600;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        
        //Set event listener for window resize and update state to window width
        window.addEventListener('resize', handleWindowResize);
        //Return a function that removes the event listener
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);

  return props.isLoading ? (
    <Spinner className='full-page' />
  ) : (
    <div className='full-page'>
      <Fragment>
        {//If searching and press back button, re-load the search with the same query. Otherwise, the back button reloads Landing and fetches popular shows, unless it's loaded from a learn more button from findSimilar.
        props.isSearching ? (
          <Button
            size='sm'
            style={{ maxWidth: '100px', marginLeft: '35px', marginTop: '20px', marginBottom: '5px' }}
            variant='outline-warning'  
            onClick={() => props.resetSearch(props.query)}
            className='button-text'
          >
            Back
          </Button>
        ) : props.isRec ? (
          //   On button click want to display SearchResults with the recommendations array
          <Button
            size='sm'
            style={{ maxWidth: '100px', marginLeft: '35px', marginTop: '20px', marginBottom: '5px' }}
            variant='outline-warning'
            onClick={() => props.resetRecommendations(props.show.id)}
            className='button-text'
          >
            Back
          </Button>
        ) : (
          <Button
            size='sm'
            style={{ maxWidth: '100px', marginLeft: '35px', marginTop: '20px', marginBottom: '5px' }}
            variant='outline-warning'
            onClick={async () => await props.resetPopular()}
            className='button-top-margin button-text'
          >
            Back Home
          </Button>
        )}

        <div
          className='details-box details-font'
          style={{
            backgroundImage: windowWidth > breakpoint ? `url(https://image.tmdb.org/t/p/w1280/${props.show.backdrop_path})` : null,
          }}
        >
          <div className='details-wrapper details-font'>
            <p className='details-title'>{props.show.name}</p>
            <hr className='details-hr'></hr>
            <div
              className={
                props.show.vote_average > 7
                  ? 'rating-circle rating-circle-green'
                  : !props.show.vote_average
                  ? 'rating-circle rating-circle-nr'
                  : props.show.vote_average < 4 ? 'rating-circle rating-circle-red' : 'rating-circle rating-circle-yellow'
              }
            >
              {props.show.vote_average
                ? props.show.vote_average * 10 + '%'
                : 'NR'}
            </div>

            <div className='flex-container'>
              <div className='details-left'>
                <p className='details-overview'>{props.show.overview}</p>
              </div>
              <div className='details-right'>
                <ul className='details-text'>
                  <span className='details-heading'>Genres: </span>
                  {props.show.genres.map((show, index) => {
                    return (
                      <li className='details-text details-list' key={index}>
                        {show.name}
                      </li>
                    );
                  })}
                </ul>

                <p className='details-text'>
                  <span className='details-heading'>Number of Episodes: </span>
                  {props.show.number_of_episodes}
                </p>
                <p className='details-text'>
                  <span className='details-heading'>Number of Seasons: </span>
                  {props.show.number_of_seasons}
                </p>
                <p className='details-text'>
                  <span className='details-heading'>User Rating: </span>
                  {props.show.vote_average} / 10
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
}

Details.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isSearching: PropTypes.bool.isRequired,
  isRec: PropTypes.bool.isRequired,
  show: PropTypes.object.isRequired,
  resetSearch: PropTypes.func.isRequired,
  resetPopular: PropTypes.func.isRequired,
  resetRecommendations: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Details;
