import React from 'react';
import { Link } from 'react-router-dom';

function Show(props) {
  return props.image ? (
    <div className='card'>
      <img alt='show' src={props.image.medium}></img>
      <h1>{props.title}</h1>
      <Link to='/details'>Learn more...</Link>
    </div>
  ) : (
    <div className='card'>
      <p>No image available</p>
      <h1>{props.title}</h1>
      <Link to='/details'>Learn more...</Link>
    </div>
  );
}

export default Show;
