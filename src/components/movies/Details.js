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
            style={{ maxWidth: '100px', marginLeft: '1.5rem', marginTop: '20px' }}
            variant='outline-warning'
            onClick={() => props.resetSearch(props.query)}
          >
            Back
          </Button>
        ) : props.isRec ? (
          //   On button click want to display SearchResults with the recommendations array
          <Button
            size='sm'
            style={{ maxWidth: '100px', marginLeft: '1.5rem', marginTop: '20px' }}
            variant='outline-warning'
            onClick={() => props.resetRecommendations(props.show.id)}
          >
            Back
          </Button>
        ) : (
          <Button
            size='sm'
            style={{ maxWidth: '100px', marginLeft: '1.5rem', marginTop: '20px' }}
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
            <p className='details-title'>{props.show.name}</p>
            <div
              className={
                props.show.vote_average > 5
                  ? 'rating-circle rating-circle-green'
                  : !props.show.vote_average
                  ? 'rating-cicle rating-circle-nr'
                  : 'rating-circle rating-circle-red'
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

export default Details;
