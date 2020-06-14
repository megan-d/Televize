import React, { Fragment } from 'react';
import { key } from '../../config';
import Spinner from '../layout/Spinner';
import Movie from './Movie';
import Button from 'react-bootstrap/Button';

function Details(props) {
return <Fragment>
    <p>Title:</p>
<p>{props.movie.title}</p>

<Button onClick={() => props.fetchSearch(props.movie.id)}>Back</Button>
</Fragment>;
}

export default Details;
