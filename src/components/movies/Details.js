import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';

function Details(props) {
  return props.isSearching ? (
    <Fragment>
      <p>Name:</p>
      <p>{props.show.name}</p>

      <Button onClick={() => props.resetSearch(props.query)}>Back to Search Results</Button>
    </Fragment>
  ) : (
    <Fragment>
      <p>Name:</p>
      <p>{props.show.name}</p>
      <Button onClick={() => props.resetPopular()}>Back</Button>
    </Fragment>
  );
}

export default Details;
