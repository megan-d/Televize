import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

function Details(props) {
  const Page = styled.div`
    height: 80vh;
    width: 100%;
    background-image: url(https://image.tmdb.org/t/p/w1280/${props.show.backdrop_path});
    background-repeat: no-repeat;
    margin: 0 auto;
  `;

  const Background = styled.div`
    opacity: 50%;
  `;

  return props.isSearching ? (
    <Page>
      <Button onClick={() => props.resetSearch(props.query)}>
        Back to Search Results
      </Button>
      {/* <img src={`https://image.tmdb.org/t/p/w185/${props.show.poster_path}`} alt='poster'></img> */}
      <p>Name:</p>
      <p>{props.show.name}</p>
    </Page>
  ) : (
    <Page>
      <Button onClick={() => props.resetPopular()}>Back</Button>
      {/* <img src={`https://image.tmdb.org/t/p/w185/${props.show.poster_path}`} alt='poster'></img> */}
      <p>Name:</p>
      <p>{props.show.name}</p>
    </Page>
  );
}

export default Details;
