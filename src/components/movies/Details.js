import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';

function Details(props) {
  return props.isSearching ? (
    <Fragment>
        <Button onClick={() => props.resetSearch(props.query)}>Back to Search Results</Button>
        <img src={`https://image.tmdb.org/t/p/w200/${props.show.poster_path}`} alt='poster'></img>
      <p>Name:</p>
      <p>{props.show.name}</p>

      
    </Fragment>
  ) : (
    <Fragment>
        <Button onClick={() => props.resetPopular()}>Back</Button>
        <img src={`https://image.tmdb.org/t/p/w200/${props.show.poster_path}`} alt='poster'></img>
      <p>Name:</p>
      <p>{props.show.name}</p>
      
    </Fragment>
  );
}

export default Details;
