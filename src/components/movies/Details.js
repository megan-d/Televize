import React, { Fragment } from 'react';
import { key } from '../../config';
import Spinner from '../layout/Spinner';
import Movie from './Movie';
import Button from 'react-bootstrap/Button';

function Details(props) {
return <Fragment>
    <p>Title:</p>
<p>{props.movie.title}</p>
{/* Need to fix button so that when you click, it either goes back to home page or back to search results (depending on how you got to the Details) */}
<Button onClick={props.goBack}>Back</Button>
</Fragment>;
}

export default Details;
