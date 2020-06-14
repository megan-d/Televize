import React, { Fragment } from 'react';
import { key } from '../../config';
import Spinner from '../layout/Spinner';
import Movie from './Movie';
import Button from 'react-bootstrap/Button';

function Details(props) {
  return props.isSearching ? (
    <Fragment>
      <p>Title:</p>
      <p>{props.movie.title}</p>

      <Button onClick={() => props.resetSearch(props.query)}>Back to Search Results</Button>
    </Fragment>
  ) : (
    <Fragment>
      <p>Title:</p>
      <p>{props.movie.title}</p>

      <Button onClick={() => props.resetPopular()}>Back</Button>
    </Fragment>
  );
}

export default Details;
