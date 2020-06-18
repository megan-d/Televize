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
  `;

  const Background = styled.div`
    opacity: 50%;
  `;

  const DetailWrapper = styled.div`
    opacity: 80%;
    background: black;
    width: 50%;
    margin: 0 auto;
    z-index: 5;
    position: absolute;
    top: 25%;
    left: 25%;
    border-radius: 3px;
    border: 1px solid slategrey;
    box-shadow: 0 0 20px rgba(0, 0, 0, 1);
  `;

  

  return (
    <Fragment>
      {//If searching and press back button, re-load the search with the same query. Otherwise, the back button reloads Landing and fetches popular shows, unless it's loaded from a learn more button from findSimilar.
      props.isSearching ? (
        <Button onClick={() => props.resetSearch(props.query)}>
          Back to Search Results
        </Button>
      ) : (
        <Button onClick={() => props.resetPopular()}>Back Home</Button>
      )}
      <Page>
        <DetailWrapper>
          <p>{props.show.name}</p>
          {/* <Button onClick={() => props.findSimilar(props.show.id)}>Find Similar Shows</Button> */}
        </DetailWrapper>
      </Page>
    </Fragment>
  );
}

export default Details;
