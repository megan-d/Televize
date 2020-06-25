import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from '../layout/Spinner';

function Details(props) {
  return props.isLoading ? (
    <Spinner className='full-page' />
  ) : (
    <div className='full-page'>
      <Fragment>
        {//If searching and press back button, re-load the search with the same query. Otherwise, the back button reloads Landing and fetches popular shows, unless it's loaded from a learn more button from findSimilar.
        props.isSearching ? (
          <Button
            size='sm'
            style={{ maxWidth: '100px', marginLeft: '1.5rem' }}
            variant='outline-warning'
            onClick={() => props.resetSearch(props.query)}
          >
            Back
          </Button>
        ) : props.isRec ? (
          //   On button click want to display SearchResults with the recommendations array
          <Button
            size='sm'
            style={{ maxWidth: '100px', marginLeft: '1.5rem' }}
            variant='outline-warning'
            onClick={() => props.resetRecommendations(props.show.id)}
          >
            Back
          </Button>
        ) : (
          <Button
            size='sm'
            style={{ maxWidth: '100px', marginLeft: '1.5rem' }}
            variant='outline-warning'
            onClick={async () => await props.resetPopular()}
            className='button-top-margin'
          >
            Back Home
          </Button>
        )}

        <div
          className='details-box details-font'
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${props.show.backdrop_path})`,
          }}
        >
          <div className='details-wrapper details-font'>
            <div className='details-left'>
              <p className='details-title'>{props.show.name}</p>
              <p className='details-overview'>{props.show.overview}</p>
            </div>
            <div className='details-right'>
              <p className='details-heading'>Genres:</p>
              <ul>
                {props.show.genres.map((show, index) => {
                  return (
                    <li className='details-text details-list' key={index}>
                      {show.name}
                    </li>
                  );
                })}
              </ul>

              <p className='details-heading'># of Episodes:</p>
              <p className='details-text'>{props.show.number_of_episodes}</p>
              <p className='details-heading'># of Seasons:</p>
              <p className='details-text'>{props.show.number_of_seasons}</p>
              <p className='details-heading'>User Rating:</p>
              <p className='details-text'>{props.show.vote_average}/10</p>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
}

export default Details;
