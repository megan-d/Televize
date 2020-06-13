import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Searchbox(props) {
  return (
    <Fragment>
        <p>A catalog of movies to help you learn more about your favorite films</p>
        <p>Browse popular movies or search for a specific movie</p>
      <form onSubmit={props.onSubmit}>
        <input
          type='search'
          placeholder='Search for a movie...'
          onChange={props.onSearchChangeHandler}
        ></input>
        <input type='submit' value='submit'></input>
      </form>
    </Fragment>
  );
}

Searchbox.propTypes = {
  onSearchChangeHandler: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbox;
