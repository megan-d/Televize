import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

function Details(props) {
  const Page = styled.div`
    height: 80vh;
    width: 60%;
    background-image: url(https://image.tmdb.org/t/p/w1280/${props.show.backdrop_path});
    background-repeat: no-repeat;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  `;

    //Bring theme color in - defined in App.js
  const DetailWrapper = styled.div`
    opacity: 80%;
    background: ${(props) => props.theme.primary};
    width: 80%;
    margin: 0 auto;
    z-index: 5;
    position: absolute;
    top: 10%;
    left: 10%;
    border-radius: 3px;
    border: 1px solid slategrey;
    box-shadow: 0 0 20px rgba(0, 0, 0, 1);
  `;

  return (
    <Fragment>
      {//If searching and press back button, re-load the search with the same query. Otherwise, the back button reloads Landing and fetches popular shows, unless it's loaded from a learn more button from findSimilar.
      props.isSearching ? (
        <Button
          size='sm'
          style={{maxWidth: '100px'}}
          variant='outline-warning'
          onClick={() => props.resetSearch(props.query)}
        >
          Back
        </Button>
      ) : props.isRec ? (
        //   On button click want to display SearchResults with the recommendations array
        <Button
          size='sm'
          style={{maxWidth: '100px'}}
          variant='outline-warning'
          onClick={() => props.resetRecommendations(props.show.id)}
        >
          Back
        </Button>
      ) : (
        <Button
          size='sm'
          style={{maxWidth: '100px'}}
          variant='outline-warning'
          onClick={() => props.resetPopular()}
        >
          Back Home
        </Button>
      )}
      <Page>
        <DetailWrapper>
          <p>{props.show.name}</p>
          <p>{props.show.overview}</p>
          <p className='details-heading'>Genres:</p>
          {props.show.genres.map((show, index) => {
            return <p key={index}>{show.name}</p>;
          })}
          <p className='details-heading'># of Episodes:</p>
          <p>{props.show.number_of_episodes}</p>
          <p className='details-heading'># of Seasons:</p>
          <p>{props.show.number_of_seasons}</p>
          <p className='details-heading'>User Rating:</p>
          <p>{props.show.vote_average}/10</p>
        </DetailWrapper>
      </Page>
    </Fragment>
  );
}

export default Details;
